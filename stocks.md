To test the **stock-related API endpoints** in **Postman** based on the `stock.py` schemas you've shared, you will need to set up several endpoints that correspond to creating, updating, retrieving, and managing stock items. Below are detailed steps and example requests for each of these operations.

### Step 1: Set Up Environment (Optional)
If you are working with different environments (e.g., local development or production), you can define environment variables in Postman:

1. **Click the "Environment" dropdown** in the top-right corner of Postman.
2. **Create a new environment** (e.g., `Local`, `Development`, or `Production`).
3. Add a variable:
   - `base_url`: `http://localhost:8000` (or the actual base URL of your API).

### Step 2: Define Stock-Related Endpoints
Here are common stock-related API endpoints based on the `stock.py` schema:

- **Create Stock Item**: `POST /stock`
- **Update Stock Item**: `PATCH /stock/{id}`
- **Get Stock Item Details**: `GET /stock/{id}`
- **Get All Stock Items**: `GET /stock`
- **Delete Stock Item**: `DELETE /stock/{id}`
- **Create Stock Status**: `POST /stock/status`
- **Get Stock Status**: `GET /stock/status`

### Step 3: Testing Stock Endpoints in Postman

#### 1. **Create Stock Item** (POST `/stock`)
To create a new stock item, you will send a `POST` request with the stock item's details in the request body.

- **URL**: `{{base_url}}/stock`
- **Method**: `POST`
- **Body**:
  - Choose **raw** and select **JSON** format.
  - Use the following example JSON to create a stock item:
```json
{
    "itemId": "S12345",
    "itemName": "Washing Machine",
    "categoryId": "Electronics",
    "unitId": "Unit1",
    "quantityAdded": 50,
    "quantityInStock": 50,
    "purchaseDate": "2024-11-01",
    "purchasePrice": 200.00,
    "expiryDate": "2027-11-01",
    "barcode": "WM123456789",
    "remark": "New stock item",
    "restockLevel": 10,
    "supplierId": "Supplier123",
    "status": "active",
    "image": "http://example.com/washingmachine.jpg"
}
```

- **Expected Response** (success):
```json
{
    "id": 1,
    "itemId": "S12345",
    "itemName": "Washing Machine",
    "categoryName": "Electronics",
    "unitName": "Unit1",
    "quantityAdded": 50,
    "quantityInStock": 50,
    "purchaseDate": "2024-11-01",
    "purchasePrice": 200.00,
    "expiryDate": "2027-11-01",
    "barcode": "WM123456789",
    "remark": "New stock item",
    "restockLevel": 10,
    "supplierName": "Supplier123",
    "status": "active",
    "created_at": "2024-11-07T12:00:00Z",
    "image": "http://example.com/washingmachine.jpg"
}
```

#### 2. **Update Stock Item** (PATCH `/stock/{id}`)
To update an existing stock item, you will send a `PATCH` request with the fields you want to update.

- **URL**: `{{base_url}}/stock/{id}`
  - Replace `{id}` with the actual stock item ID (e.g., `1`).
  - Example: `{{base_url}}/stock/1`
- **Method**: `PATCH`
- **Body**:
  - Choose **raw** and select **JSON** format.
  - Use the following JSON example to update a stock item:
```json
{
    "quantityInStock": 100,
    "purchasePrice": 180.00
}
```

- **Expected Response** (success):
```json
{
    "id": 1,
    "itemId": "S12345",
    "itemName": "Washing Machine",
    "categoryName": "Electronics",
    "unitName": "Unit1",
    "quantityAdded": 50,
    "quantityInStock": 100,
    "purchaseDate": "2024-11-01",
    "purchasePrice": 180.00,
    "expiryDate": "2027-11-01",
    "barcode": "WM123456789",
    "remark": "Updated stock item",
    "restockLevel": 10,
    "supplierName": "Supplier123",
    "status": "active",
    "created_at": "2024-11-07T12:00:00Z",
    "image": "http://example.com/washingmachine.jpg"
}
```

#### 3. **Get Stock Item Details** (GET `/stock/{id}`)
To fetch the details of a stock item by ID.

- **URL**: `{{base_url}}/stock/{id}`
  - Replace `{id}` with the stock item ID (e.g., `1`).
  - Example: `{{base_url}}/stock/1`
- **Method**: `GET`

- **Expected Response** (success):
```json
{
    "id": 1,
    "itemId": "S12345",
    "itemName": "Washing Machine",
    "categoryName": "Electronics",
    "unitName": "Unit1",
    "quantityAdded": 50,
    "quantityInStock": 100,
    "purchaseDate": "2024-11-01",
    "purchasePrice": 180.00,
    "expiryDate": "2027-11-01",
    "barcode": "WM123456789",
    "remark": "Updated stock item",
    "restockLevel": 10,
    "supplierName": "Supplier123",
    "status": "active",
    "created_at": "2024-11-07T12:00:00Z",
    "image": "http://example.com/washingmachine.jpg"
}
```

#### 4. **Get All Stock Items** (GET `/stock`)
To get a list of all stock items.

- **URL**: `{{base_url}}/stock`
- **Method**: `GET`

- **Expected Response**:
```json
{
    "stockItems": [
        {
            "id": 1,
            "itemId": "S12345",
            "itemName": "Washing Machine",
            "categoryName": "Electronics",
            "unitName": "Unit1",
            "quantityAdded": 50,
            "quantityInStock": 100,
            "purchaseDate": "2024-11-01",
            "purchasePrice": 180.00,
            "expiryDate": "2027-11-01",
            "barcode": "WM123456789",
            "remark": "Updated stock item",
            "restockLevel": 10,
            "supplierName": "Supplier123",
            "status": "active",
            "created_at": "2024-11-07T12:00:00Z",
            "image": "http://example.com/washingmachine.jpg"
        },
        {
            "id": 2,
            "itemId": "S67890",
            "itemName": "Refrigerator",
            "categoryName": "Electronics",
            "unitName": "Unit2",
            "quantityAdded": 30,
            "quantityInStock": 50,
            "purchaseDate": "2024-11-05",
            "purchasePrice": 350.00,
            "expiryDate": "2027-11-05",
            "barcode": "FR123456789",
            "remark": "New stock item",
            "restockLevel": 15,
            "supplierName": "Supplier456",
            "status": "active",
            "created_at": "2024-11-07T12:00:00Z",
            "image": "http://example.com/refrigerator.jpg"
        }
    ]
}
```

#### 5. **Delete Stock Item** (DELETE `/stock/{id}`)
To delete a stock item by its ID.

- **URL**: `{{base_url}}/stock/{id}`
  - Replace `{id}` with the stock item ID you want to delete.
  - Example: `{{base_url}}/stock/1`
- **Method**: `DELETE`

- **Expected Response** (success):
```json
{
    "success": 1,
    "message": "Stock item deleted successfully"
}
```

#### 6. **Create Stock Status** (POST `/stock/status`)
To create a new stock status (active, inactive, etc.).

- **URL**: `{{base_url}}/stock/status`
- **Method**: `POST`
- **Body**:
  - Choose **raw** and select **JSON** format.
  - Example JSON:
```json
{
    "name": "active"
}
```

- **Expected Response** (success):
```json
{
    "id": 1,
    "name": "active"
}
```

#### 7. **Get Stock Status** (GET `/stock/status`)
To retrieve all available stock statuses.

- **URL**: `{{base_url}}/stock/status

`
- **Method**: `GET`

- **Expected Response**:
```json
{
    "statuses": [
        {
            "id": 1,
            "name": "active"
        },
        {
            "id": 2,
            "name": "inactive"
        },
        {
            "id": 3,
            "name": "discontinued"
        }
    ]
}
```

---

### Step 4: Test in Postman
You can now follow these steps in Postman to test these stock API endpoints. Ensure that your server is running and that the API endpoints are correctly configured to handle the requests.

If you have any specific issues or need more details on certain operations, feel free to ask!