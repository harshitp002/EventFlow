# 🎟 EventFlow – Scalable Microservices Event Ticketing Platform

EventFlow is a production-ready **microservices-based event management and ticketing system** built with **NestJS, Kafka, Redis, and PostgreSQL**.

The system is designed with distributed architecture principles including API Gateway, service-to-service communication, event-driven messaging, shared libraries, and centralized validation.

---

## 🏗 Architecture Overview

This project follows a **Microservices Architecture** pattern.

```
                        ┌───────────────┐
                        │   API Gateway │
                        │   (Port 3000) │
                        └───────┬───────┘
                                │
        ┌───────────────┬───────────────┬───────────────┬───────────────┐
        │               │               │               │               │
  Auth Service     Events Service   Tickets Service  Notifications   Users Service
   (3001)             (3003)            (3004)         Service(3006)    (3002)
```

### 🔄 Communication Patterns
- HTTP (via API Gateway)
- Kafka (Event-driven communication)
- Redis (Throttling & caching)
- Shared internal libraries

---

## 🚀 Services

| Service               | Port | Description                      |
| --------------------- | ---- | -------------------------------- |
| API Gateway           | 3000 | Entry point, routing, throttling |
| Auth Service          | 3001 | Authentication & JWT             |
| Users Service         | 3002 | User management                  |
| Events Service        | 3003 | Event creation & management      |
| Tickets Service       | 3004 | Ticket purchasing & check-in     |
| Notifications Service | 3006 | Email notifications              |


---

## 🧩 Core Features

### 🔐 Authentication
- JWT Authentication
- User Registration & Login
- Secure route guards
- Centralized exception handling

### 🎟 Events & Tickets
- Create & update events
- Purchase tickets
- Ticket check-in
- Event management

### 📩 Notifications
- Email notifications on:
  - Registration
  - Ticket purchase
  - Event updates

### ⚡ API Gateway
- Centralized routing
- Redis-based throttling
- Response transformation
- Global exception filters

### 🧠 Shared Libraries
- DTO validation
- Global response interface
- HTTP exception filters
- Interceptors
- Utility functions
- Centralized constants

---

## 📁 Project Structure

```
apps/
│
├── api-gateway/
├── auth-service/
├── events-service/
├── tickets-service/
├── notifications-service/
│
libs/
│
├── common/       # Shared DTOs, filters, interceptors
├── database/     # Drizzle ORM schemas & DB service
├── kafka/        # Kafka integration module
```

---

## 🛠 Tech Stack

| Layer       | Technology        |
| ----------- | ----------------- |
| Framework   | NestJS            |
| Language    | TypeScript        |
| Database    | PostgreSQL        |
| ORM         | Drizzle ORM       |
| Messaging   | Kafka             |
| Cache       | Redis             |
| API Gateway | NestJS            |
| Validation  | class-validator   |
| Linting     | ESLint + Prettier |
| Testing     | Jest              |


---

## 🔄 Event-Driven Architecture (Kafka)

Kafka is used for asynchronous communication between services:

- User Registered → Notify Service
- Ticket Purchased → Send Confirmation Email
- Event Updated → Broadcast Notification

---

## 🗄 Database Layer

- PostgreSQL
- Drizzle ORM
- Modular schema structure:
  - Users
  - Events
  - Tickets

---

## 🧪 Running the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start Infrastructure (Docker)

```
docker compose up -d
```

This will start:
- PostgreSQL
- Redis
- Kafka (if configured)

### 3️⃣ Run Services

Start each service individually:

```
npm run start:dev api-gateway
npm run start:dev auth-service
npm run start:dev events-service
npm run start:dev tickets-service
npm run start:dev notifications-service
```

---

## 🔐 Environment Variables (Example)

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/eventhub
JWT_SECRET=supersecret
KAFKA_BROKER=localhost:9092
REDIS_URL=redis://localhost:6379
```

---

## 📡 Example API Endpoints

### Auth
```
POST   /auth/register
POST   /auth/login
```

### Events
```
POST   /events
GET    /events
PATCH  /events/:id
```

### Tickets
```
POST   /tickets/purchase
POST   /tickets/check-in
```

---

## 🧠 Shared Constants

```ts
export const SERVICES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth-service',
  USERS_SERVICE: 'users-service',
  EVENTS_SERVICE: 'events-service',
  TICKETS_SERVICE: 'tickets-service',
  NOTIFICATIONS_SERVICE: 'notifications-service',
} as const;

export const SERVICES_PORTS = {
  API_GATEWAY: 3000,
  AUTH_SERVICE: 3001,
  USERS_SERVICE: 3002,
  EVENTS_SERVICE: 3003,
  TICKETS_SERVICE: 3004,
  NOTIFICATIONS_SERVICE: 3006,
} as const;
```

---

## 🏗 Architectural Principles Used

- Microservices Architecture
- Event-Driven Design
- Clean Modular Design
- Shared Libraries Pattern
- Centralized Error Handling
- Distributed Communication
- API Gateway Pattern
- Redis Rate Limiting

---

## 📈 Future Enhancements

- Payments integration
- Distributed tracing
- Circuit breaker pattern
- Kubernetes deployment
- CI/CD pipeline
- Monitoring with Prometheus & Grafana
