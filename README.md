# SWYNEX Task 2 — AdMaster Backend API and Database

A runnable Node.js/Express/MongoDB REST API for the **AdMaster Digital Advertising Management System**. The uploaded source is a React/TypeScript frontend; this repository adds a backend implementation for a complete **Campaign** resource with authentication and validation.

## Requirements
- Node.js 18+
- MongoDB running locally or a MongoDB Atlas connection

## Setup
```bash
cd backend
npm install
```
Copy `.env.example` to `.env` and set `MONGODB_URI` and a strong random `JWT_SECRET`. Do **not** commit `.env`.

```bash
npm run dev
```
Visit `http://localhost:5000/api/health` to verify database connectivity.

## API
| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/auth/register` | Create user and get JWT |
| POST | `/api/auth/login` | Login and get JWT |
| GET | `/api/settings/profile` | Profile (JWT) |
| GET | `/api/campaigns` | List owned campaigns (JWT) |
| GET | `/api/campaigns/:id` | Read campaign (JWT) |
| POST | `/api/campaigns` | Create campaign (JWT) |
| PUT | `/api/campaigns/:id` | Update campaign (JWT) |
| DELETE | `/api/campaigns/:id` | Delete campaign (JWT) |

### Test with curl
Register:
```bash
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"first_name":"Demo","email":"demo@example.com","password":"StrongPass123"}'
```
Copy `token` from response. Create a campaign (replace TOKEN):
```bash
curl -X POST http://localhost:5000/api/campaigns -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"name":"Diwali Campaign","platform":"Instagram","status":"Active","budget":5000}'
```
List campaigns:
```bash
curl http://localhost:5000/api/campaigns -H "Authorization: Bearer TOKEN"
```

## Validation
Campaign name 2–120 characters; supported platform and status only; budget > 0; spent >= 0 and <= budget; optional ISO dates must be ordered; invalid IDs return 400; missing records return 404; JWT required and users can access only their own campaigns.

## Frontend integration
The provided AdMaster `Campaigns.tsx` already calls `http://localhost:5000/api/campaigns`, expects `{campaigns: [...]}`, and sends `Authorization: Bearer <token>`. This API matches those calls. The full frontend source was supplied as a **Markdown listing**, not a runnable frontend folder, so it is **not bundled here**. Other existing frontend features (billing, audience, uploads, reports, settings updates) require additional endpoints and are outside this Task 2 implementation. The frontend login/register request payloads may need adjustment to the auth routes above.

## Submission
Commit this project to a GitHub repository named `SWYNEX-Backend-API-and-Database`, demonstrate real database persistence and CRUD in screenshots/video, then share repository and LinkedIn demo URLs. Do not claim untested functionality as completed.
