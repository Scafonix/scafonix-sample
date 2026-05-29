const fastify = require('fastify')({ logger: true });
const path = require('path');
const crypto = require('crypto');

// Register plugin to serve frontend static files (checkout.html)
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', 
});

// 🌟 [Standard Version Core] Capture raw body and configure parser to prevent webhook body tampering
fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
  try {
    const json = JSON.parse(body);
    // Keep and pass both the original raw JSON string (rawBody) and the parsed object
    done(null, { rawBody: body, parsed: json });
  } catch (err) {
    err.statusCode = 400;
    done(err);
  }
});

/**
 * Webhook endpoint for Scafonix payment completion notification
 */
fastify.post('/api/webhook', async (request, reply) => {
  // Merchant secret key issued from the Scafonix Dashboard (sk_live_...)
  const merchantSecretKey = "sk_live_secret123456789";
  
  // Hex digest signature sent by Scafonix server in the headers
  const signatureHeader = request.headers['x-signature'];
  
  // Extract raw body and parsed data captured by ContentTypeParser
  const { rawBody, parsed } = request.body;

  if (!signatureHeader) {
    return reply.status(400).send({ error: 'Missing x-signature header' });
  }

  // 1. Compute HMAC SHA-256 signature of the untouched rawBody using merchant secret key
  const computedSignature = crypto
    .createHmac('sha256', merchantSecretKey)
    .update(rawBody)
    .digest('hex');

  // 2. Strictly compare computed signature against header's x-signature (Anti-tampering)
  const isSignatureValid = computedSignature === signatureHeader;

  // 3. Execute business logic if signature matches and payment status is 'COMPLETED'
  if (isSignatureValid && parsed.status === 'COMPLETED') {
    // Extract merchant-side user identifier (customerId) provided in the webhook payload
    const { customerId, productId, id: invoiceId } = parsed;

    // 🌟 Merchant automated fulfillment section
    // Update the database order status to 'Awaiting Shipment' based on the customerId here
    fastify.log.info(`[Verification Success] User ${customerId} completed payment for product ${productId}. (Invoice: ${invoiceId})`);
    
    // Respond 200 OK to Scafonix server upon success
    return reply.status(200).send({ success: true, message: 'Fulfillment processed' });
  }

  // Handle signature mismatch or incomplete payments
  fastify.log.error('[Verification Failed] Invalid webhook request detected.');
  return reply.status(401).send({ error: 'Invalid Signature or Payment Not Completed' });
});

// Start Server (Port: 3000)
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('\n🚀 Scafonix sample server is now running!');
    console.log('👉 Check out the Lite version at http://localhost:3000/\n');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
