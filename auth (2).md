Sure! Below is the updated markdown documentation for your code based on the functions provided in the `controllers.py`.
This documentation covers each of the major functions, their expected inputs, and the responses returned.

---

# API Documentation

## Authentication and user Management

This documentation describes the authentication and user management functions available in the application. These
functions handle user registration, login, password reset, OTP verification, user information management, and token
management.

---

### **1. Register user**

**Endpoint**: `POST /register`
**Description**: Registers a new user and sends an OTP for email verification.

| **Field**   | **Type**        | **Description**                                | **Example**                       | **Required (Y/N)** |
|-------------|-----------------|------------------------------------------------|-----------------------------------|--------------------|
| `full_name` | `str`           | Full name of the user                          | `"John Doe"`                      | Y                  |
| `email`     | `str`           | user's email address                           | `"johndoe@example.com"`           | Y                  |
| `password`  | `str`           | Password for the user                          | `"password123"`                   | Y                  |
| `role`      | `int`           | Role ID of the user (1=admin, 2=user, 3=guest) | `2`                               | Y                  |
| `gender`    | `Optional[int]` | Gender ID (1=male, 2=female, 3=other)          | `1`                               | N                  |
| `phone`     | `Optional[str]` | user's phone number                            | `"123-456-7890"`                  | N                  |
| `address`   | `Optional[str]` | user's address                                 | `"123 Main St, City"`             | N                  |
| `image`     | `Optional[str]` | Profile image URL                              | `"https://example.com/image.jpg"` | N                  |

#### Example Request:

```json
{
  "full_name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "role": 2,
  "gender": 1,
  "phone": "123-456-7890",
  "address": "123 Main St, City",
  "image": "https://example.com/image.jpg"
}
```

#### Example Response:

```json
{
  "message": "Registration successful. Please verify your email with the OTP sent.",
  "otp_code": 123456,
  "expires_in": 300,
  "created_at": "2024-11-14T12:34:56",
  "role": "user"
}
```

---

### **2. user Login**

**Endpoint**: `POST /login`
**Description**: Authenticates a user and returns JWT tokens.

| **Field**  | **Type** | **Description**       | **Example**             | **Required (Y/N)** |
|------------|----------|-----------------------|-------------------------|--------------------|
| `email`    | `str`    | Email of the user     | `"johndoe@example.com"` | Y                  |
| `password` | `str`    | Password for the user | `"password123"`         | Y                  |

#### Example Request:

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Example Response:

```json
{
  "message": "Login successful",
  "status": 200,
  "type": "jwt",
  "data": {
    "access_token": "access-token-xyz123",
    "access_expires_in": 3600,
    "refresh_token": "refresh-token-xyz123",
    "refresh_expires_in": 86400,
    "token_type": "Bearer"
  }
}
```

---

### **3. Request OTP**

**Endpoint**: `POST /request-otp`
**Description**: Sends an OTP to the user's email address for verification.

| **Field** | **Type** | **Description**           | **Example**             | **Required (Y/N)** |
|-----------|----------|---------------------------|-------------------------|--------------------|
| `email`   | `str`    | Email address of the user | `"johndoe@example.com"` | Y                  |

#### Example Request:

```json
{
  "email": "johndoe@example.com"
}
```

#### Example Response:

```json
{
  "message": "OTP requested successfully.",
  "data": {
    "email": "johndoe@example.com",
    "otp_code": 123456,
    "expires_in": 600
  }
}
```

---

### **4. Verify OTP**

**Endpoint**: `POST /verify-otp`
**Description**: Verifies the OTP and activates the user's account.

| **Field**  | **Type** | **Description**        | **Example**             | **Required (Y/N)** |
|------------|----------|------------------------|-------------------------|--------------------|
| `email`    | `str`    | user's email           | `"johndoe@example.com"` | Y                  |
| `otp_code` | `int`    | OTP code sent to email | `123456`                | Y                  |

#### Example Request:

```json
{
  "email": "johndoe@example.com",
  "otp_code": 123456
}
```

#### Example Response:

```json
{
  "message": "OTP verified successfully. You can now log in.",
  "email": "johndoe@example.com",
  "otp_code": 123456
}
```

---

### **5. Forgot Password**

**Endpoint**: `POST /forgot-password`
**Description**: Requests a password reset for the user.

| **Field** | **Type** | **Description** | **Example**             | **Required (Y/N)** |
|-----------|----------|-----------------|-------------------------|--------------------|
| `email`   | `str`    | user's email    | `"johndoe@example.com"` | Y                  |

#### Example Request:

```json
{
  "email": "johndoe@example.com"
}
```

#### Example Response:

```json
{
  "message": "Password reset link sent to your email."
}
```

---

### **6. Reset Password**

**Endpoint**: `POST /reset-password`
**Description**: Resets the user's password using a reset token.

| **Field**      | **Type** | **Description**      | **Example**            | **Required (Y/N)** |
|----------------|----------|----------------------|------------------------|--------------------|
| `reset_token`  | `str`    | Password reset token | `"reset-token-xyz123"` | Y                  |
| `new_password` | `str`    | New password         | `"newpassword123"`     | Y                  |

#### Example Request:

```json
{
  "reset_token": "reset-token-xyz123",
  "new_password": "newpassword123"
}
```

#### Example Response:

```json
{
  "message": "Password reset successfully."
}
```

---

### **7. Change Email**

**Endpoint**: `POST /change-email`
**Description**: Changes the user's email address.

| **Field**       | **Type** | **Description**           | **Example**             | **Required (Y/N)** |
|-----------------|----------|---------------------------|-------------------------|--------------------|
| `current_email` | `str`    | Current email of the user | `"johndoe@example.com"` | Y                  |
| `new_email`     | `str`    | New email to change to    | `"johnnew@example.com"` | Y                  |

#### Example Request:

```json
{
  "current_email": "johndoe@example.com",
  "new_email": "johnnew@example.com"
}
```

#### Example Response:

```json
{
  "message": "Email changed successfully."
}
```

---

### **8. Update user Information**

**Endpoint**: `PUT /users/{user_id}`
**Description**: Updates user information. Only accessible by admins.

| **Field**   | **Type** | **Description**          | **Example**                       | **Required (Y/N)** |
|-------------|----------|--------------------------|-----------------------------------|--------------------|
| `full_name` | `str`    | user's full name         | `"John Doe"`                      | Y                  |
| `phone`     | `str`    | user's phone number      | `"123-456-7890"`                  | Y                  |
| `address`   | `str`    | user's address           | `"123 Main St, City"`             | Y                  |
| `image`     | `str`    | user's profile image URL | `"https://example.com/image.jpg"` | Y                  |

#### Example Request:

```json
{
  "full_name": "John Doe",
  "phone": "123-456-7890",
  "address": "123 Main St, City",
  "image": "https://example.com/image.jpg"
}
```

#### Example Response:

```json
{
  "message": "user updated successfully."
}
```

---

### **9. Delete user**

**Endpoint**: `DELETE /users/{user_id}`
**Description**: Deletes a user account. Only accessible by admins.

| **Field**     | **Type

| **        | **Description** | **Example**       | **Required (Y/N)** |   |
|-----------|-----------------|-------------------|--------------------|---|
| `user_id` | `int`           | user ID to delete | `1`                | Y |

#### Example Request:

```json
{
  "user_id": 1
}
```

#### Example Response:

```json
{
  "message": "user deleted successfully."
}
```

---

### **10. Refresh Token**

**Endpoint**: `POST /refresh-token`
**Description**: Refreshes the JWT tokens for the current user.

| **Field**       | **Type** | **Description** | **Example**              | **Required (Y/N)** |
|-----------------|----------|-----------------|--------------------------|--------------------|
| `refresh_token` | `str`    | Refresh token   | `"refresh-token-xyz123"` | Y                  |

#### Example Request:

```json
{
  "refresh_token": "refresh-token-xyz123"
}
```

#### Example Response:

```json
{
  "access_token": "new-access-token-xyz123",
  "refresh_token": "new-refresh-token-xyz123"
}
```

---

Let me know if you need additional sections or further details!
