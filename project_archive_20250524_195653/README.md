# 🚀 Telegent mPaaS API Documentation

[![API Version](https://img.shields.io/badge/API-v1.0-blue)](https://api.telegent.com/v1.0)
[![Documentation](https://img.shields.io/badge/docs-interactive-green)](https://telegent.github.io/mpaas-documentation)
[![License](https://img.shields.io/badge/license-Private-red)](LICENSE)
[![Status](https://img.shields.io/badge/status-production-brightgreen)]()

The **definitive developer hub** for Telegent's mPaaS (Mobile Platform as a Service) Core APIs. Build powerful telecommunications applications with our enterprise-grade REST APIs for messaging, voice, and mobile number management.

## 🌟 What is Telegent mPaaS?

Telegent mPaaS is a comprehensive **cloud-native telecommunications platform** that provides developers with enterprise-grade APIs to build powerful communication applications. Whether you're building IoT solutions, MVNO services, or sophisticated messaging platforms, our APIs provide the foundation you need.

### 🏗️ Core Services

| Service | Description | Use Cases |
|---------|-------------|-----------|
| **🔐 Authentication** | JWT-based secure API access | All API interactions, token management |
| **📱 Intelligent Mobile Numbers** | Complete lifecycle management of phone numbers | Number provisioning, porting, configuration |
| **💬 Intelligent Messaging** | Advanced SMS/MMS routing and delivery | A2P/P2P messaging, campaign management |
| **📞 Intelligent Voice** | Enterprise voice routing and SIP trunking | Call handling, voice routing, conferencing |

### 🚀 Emerging Services

- **🌐 IoT Connectivity** - Internet of Things device management
- **📡 MVNO (Beta)** - Mobile Virtual Network Operator functionality  
- **📊 Campaigns** - Advanced communication campaign management *(Coming February 2025)*

## ⚡ Quick Start

### Prerequisites

- **Account**: Telegent developer account with API credentials
- **Environment**: Node.js 18+, Python 3.8+, or any HTTP client
- **Knowledge**: Basic understanding of REST APIs and JSON

### 🔑 Authentication Flow

```bash
# 1. Get your access token
curl -X POST https://api.telegent.com/v1.0/oauth2/tokens \
  -H "Content-Type: application/json" \
  -d '{
    "AccountKey": "YOUR_ACCOUNT_KEY",
    "AccountSecret": "YOUR_ACCOUNT_SECRET", 
    "ApiEndpoint": "https://api.telegent.com/v1.0/numbers/availability"
  }'

# 2. Use the token in subsequent requests
curl -X POST https://api.telegent.com/v1.0/numbers/availability \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"NumberType": "mobile", "MessageEnabled": true, "VoiceEnabled": true}'
```

### 📱 Provision Your First Number

```javascript
// Example: JavaScript/Node.js
const response = await fetch('https://api.telegent.com/v1.0/numbers/provision', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    NumberType: 'mvno',
    MessageType: 'p2p',
    MessageEnabled: true,
    VoiceEnabled: true,
    MessageRouteId: 'MRID-your-route-id',
    VoiceRouteId: 'CRID-your-route-id',
    PhoneNumbers: [
      { Number: '+1234567890' }
    ]
  })
});
```

## 📚 Documentation

### 🎯 Interactive Documentation
Visit our **live documentation** at [telegent.github.io/mpaas-documentation](https://telegent.github.io/mpaas-documentation) for:
- Interactive API explorer
- Code examples in multiple languages
- Real-time API testing
- Comprehensive guides and tutorials

### 🗂️ API Reference Sections

- **[🔐 Authentication](src/content/api-reference/authentication)** - JWT token management
- **[📱 Mobile Numbers](src/content/api-reference/intelligent-mobile-numbers)** - Number lifecycle APIs
- **[💬 Messaging](src/content/api-reference/intelligent-messaging)** - SMS/MMS routing and delivery
- **[📞 Voice](src/content/api-reference/intelligent-voice)** - Voice routing and SIP configuration

## 🛠️ Development

### Local Setup

```bash
# Clone the repository
git clone https://github.com/telegent/mpaas-documentation.git
cd mpaas-documentation

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Documentation**: [Nextra 4](https://nextra.site) - Modern documentation framework
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS
- **Search**: [Pagefind](https://pagefind.app) - Static site search
- **Deployment**: [Vercel](https://vercel.com) + GitHub Pages
- **Language**: TypeScript for type safety

### 📦 Build & Deploy

```bash
# Production build
pnpm build

# Generate search index
pnpm postbuild

# Deploy to GitHub Pages
pnpm deploy
```

## 🌐 API Endpoints Overview

### Base URL
```
https://api.telegent.com/v1.0
```

### Core Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/oauth2/tokens` | Authenticate and get access token |
| `POST` | `/numbers/availability` | Check available phone numbers |
| `POST` | `/numbers/provision` | Purchase/provision phone numbers |
| `GET` | `/numbers/inventory` | List your phone numbers |
| `POST` | `/message/routes` | Create messaging routes |
| `POST` | `/message/outbound` | Send SMS/MMS messages |
| `POST` | `/voice/routes` | Create voice routes |
| `GET` | `/voice/routes` | Get voice route details |

## 🏢 Enterprise Features

### 🔒 Security & Compliance
- **JWT Authentication** with configurable expiration
- **IP Whitelisting** for voice routes
- **TLS 1.3** encryption for all API calls
- **HIPAA & SOC 2** compliant infrastructure

### 📊 Scalability & Performance
- **99.99% Uptime SLA** with global redundancy
- **Sub-100ms API latency** across all endpoints
- **Auto-scaling** infrastructure handles traffic spikes
- **Rate limiting** with fair usage policies

### 🧩 Integration Ready
- **Webhook support** for real-time notifications
- **SDKs available** for major programming languages
- **Postman collections** for rapid prototyping
- **OpenAPI 3.0** specification available

## 📖 Use Cases & Examples

### 🏥 Healthcare Communication
```javascript
// HIPAA-compliant patient messaging
await sendMessage({
  to: '+1234567890',
  from: '+1987654321',
  body: 'Your appointment is confirmed for tomorrow at 2 PM.',
  messageType: 'p2p'
});
```

### 🏭 IoT Device Management
```javascript
// Connect and manage IoT devices
await provisionIoTNumber({
  numberType: 'iot',
  messageType: 'p2p',
  deviceIdentifier: 'sensor-001'
});
```

### 🏢 Enterprise Contact Center
```javascript
// Set up voice routing for call center
await createVoiceRoute({
  routeName: 'Support Queue',
  routeType: 'Trunk',
  trunkIp1: '192.168.1.100',
  enableCallStreaming: true
});
```

## 🤝 Community & Support

### 📞 Developer Support
- **Email**: [developer-support@telegent.com](mailto:developer-support@telegent.com)
- **Response Time**: < 4 hours during business hours
- **Documentation Issues**: Open an issue in this repository

### 🌍 Community
- **Developer Portal**: [developers.telegent.com](https://developers.telegent.com)
- **Status Page**: [status.telegent.com](https://status.telegent.com)
- **Changelog**: Track API updates and improvements

## 📄 License & Legal

This documentation is **proprietary** to Telegent Corporation. Access to the mPaaS APIs requires a valid commercial license agreement.

- **Documentation License**: Private repository access only
- **API Usage**: Governed by Telegent Terms of Service
- **Data Privacy**: GDPR and CCPA compliant

## 🚀 Getting Started Checklist

- [ ] Sign up for Telegent developer account
- [ ] Obtain API credentials (AccountKey & AccountSecret)
- [ ] Review authentication documentation
- [ ] Test authentication endpoint
- [ ] Create your first message route
- [ ] Create your first voice route  
- [ ] Provision your first phone number
- [ ] Send your first message
- [ ] Set up webhooks for real-time events
- [ ] Implement error handling and retries

---

**Ready to build something amazing?** 🎯 [Start with our interactive documentation →](https://telegent.github.io/mpaas-documentation)

*Built with ❤️ by the Telegent Developer Experience Team*
