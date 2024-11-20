Got it! Below is the updated markdown documentation with the requested table format for each schema, detailing the fields, types, descriptions, and examples where applicable.

---

# API Schemas Documentation

This document provides a detailed overview of the Pydantic schemas used in the `app/schemas/utils.py` file. These schemas define the structure of request and response models for different entities, such as brands, categories, colors, and suppliers.

---

## 1. Brand

### `BrandCreate`

This schema is used for creating a new brand.

| Field        | Type   | Description                           | Example         |
|--------------|--------|---------------------------------------|-----------------|
| `name`       | `str`  | The name of the brand.                | "Nike"          |
| `description`| `str`  | A description of the brand.           | "Sports brand"  |

---

### `BrandResponse`

This schema is used to represent the response when a brand is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the brand.               | 1               |
| `name`       | `str`        | The name of the brand.                             | "Nike"          |
| `description`| `str`        | A description of the brand.                        | "Sports brand"  |
| `created_at` | `datetime`   | The creation timestamp of the brand.               | "2024-01-01T00:00:00" |

---

## 2. Category

### `CategoryCreate`

This schema is used for creating a new category.

| Field        | Type   | Description                           | Example         |
|--------------|--------|---------------------------------------|-----------------|
| `name`       | `str`  | The name of the category.             | "Shoes"         |
| `description`| `str`  | A description of the category.        | "Sports shoes"  |

---

### `CategoryResponse`

This schema is used to represent the response when a category is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the category.            | 1               |
| `name`       | `str`        | The name of the category.                          | "Shoes"         |
| `description`| `str`        | A description of the category.                     | "Sports shoes"  |
| `created_at` | `datetime`   | The creation timestamp of the category.            | "2024-01-01T00:00:00" |

---

## 3. Color

### `ColorCreate`

This schema is used for creating a new color.

| Field        | Type         | Description                                      | Example         |
|--------------|--------------|--------------------------------------------------|-----------------|
| `name`       | `str`        | The name of the color.                           | "Red"           |
| `description`| `Optional[str]` | An optional description of the color.          | "Bright red"    |

---

### `ColorResponse`

This schema is used to represent the response when a color is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the color.               | 1               |
| `name`       | `str`        | The name of the color.                             | "Red"           |
| `description`| `str`        | A description of the color.                        | "Bright red"    |
| `created_at` | `datetime`   | The creation timestamp of the color.               | "2024-01-01T00:00:00" |

---

## 4. Gender

### `GenderCreate`

This schema is used for creating a new gender.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `name`       | `str`        | The name of the gender.                            | "Male"          |
| `description`| `Optional[str]` | An optional description of the gender.            | "Men's apparel" |

---

### `GenderResponse`

This schema is used to represent the response when a gender is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the gender.              | 1               |
| `name`       | `str`        | The name of the gender.                            | "Male"          |

---

## 5. Model

### `ModelCreate`

This schema is used for creating a new model.

| Field        | Type   | Description                           | Example         |
|--------------|--------|---------------------------------------|-----------------|
| `name`       | `str`  | The name of the model.                | "Air Max 1"     |
| `description`| `str`  | A description of the model.           | "Running shoes" |

---

### `ModelResponse`

This schema is used to represent the response when a model is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the model.               | 1               |
| `name`       | `str`        | The name of the model.                             | "Air Max 1"     |
| `description`| `str`        | A description of the model.                        | "Running shoes" |
| `created_at` | `datetime`   | The creation timestamp of the model.               | "2024-01-01T00:00:00" |

---

## 6. Role

### `RoleCreate`

This schema is used for creating a new role.

| Field        | Type   | Description                           | Example         |
|--------------|--------|---------------------------------------|-----------------|
| `name`       | `str`  | The name of the role.                 | "Admin"         |
| `description`| `Optional[str]` | An optional description of the role.  | "Administrator" |

---

### `RoleResponse`

This schema is used to represent the response when a role is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the role.                | 1               |
| `name`       | `str`        | The name of the role.                              | "Admin"         |
| `description`| `Optional[str]` | An optional description of the role.             | "Administrator" |
| `created_at` | `datetime`   | The creation timestamp of the role.                | "2024-01-01T00:00:00" |

---

## 7. Status

### `StatusCreate`

This schema is used for creating a new status.

| Field        | Type   | Description                           | Example         |
|--------------|--------|---------------------------------------|-----------------|
| `name`       | `str`  | The name of the status.               | "Active"        |
| `description`| `str`  | A description of the status.          | "Currently active" |

---

### `StatusResponse`

This schema is used to represent the response when a status is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the status.              | 1               |
| `name`       | `str`        | The name of the status.                            | "Active"        |
| `description`| `str`        | A description of the status.                       | "Currently active" |
| `created_at` | `datetime`   | The creation timestamp of the status.              | "2024-01-01T00:00:00" |

---

## 8. Supplier

### `ContactInfo`

This schema is used for structured contact information related to a supplier.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `email`      | `Optional[str]` | The email address of the supplier.                | "contact@nike.com" |
| `phone`      | `Optional[str]` | The phone number of the supplier.                 | "+123456789"     |
| `location`   | `Optional[str]` | The location of the supplier.                     | "123 Nike St, Oregon" |

---

### `SupplierCreate`

This schema is used for creating a new supplier.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `name`       | `str`        | The name of the supplier.                         | "Nike"          |
| `email`      | `Optional[str]` | The email address of the supplier.                | "contact@nike.com" |
| `phone`      | `Optional[str]` | The phone number of the supplier.                 | "+123456789"     |
| `location`   | `Optional[str]` | The location of the supplier.                     | "123 Nike St, Oregon" |
| `status`     | `Optional[str]` | The status of

 the supplier. Defaults to "active".  | "active"        |

---

### `SupplierResponse`

This schema is used to represent the response when a supplier is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the supplier.            | 1               |
| `name`       | `str`        | The name of the supplier.                          | "Nike"          |
| `contact_info` | `ContactInfo` | The structured contact information for the supplier. | `{"email": "contact@nike.com", "phone": "+123456789", "location": "123 Nike St, Oregon"}` |
| `status`     | `str`        | The status of the supplier.                        | "active"        |

---

## 9. Unit

### `UnitCreate`

This schema is used for creating a new unit.

| Field        | Type   | Description                           | Example         |
|--------------|--------|---------------------------------------|-----------------|
| `name`       | `str`  | The name of the unit.                 | "Meter"         |
| `abbreviation`| `str`  | The abbreviation for the unit.        | "m"             |
| `description`| `str`  | A description of the unit.            | "Length unit"   |

---

### `UnitResponse`

This schema is used to represent the response when a unit is retrieved.

| Field        | Type         | Description                                        | Example         |
|--------------|--------------|----------------------------------------------------|-----------------|
| `id`         | `int`        | The unique identifier for the unit.                | 1               |
| `name`       | `str`        | The name of the unit.                              | "Meter"         |
| `abbreviation`| `str`        | The abbreviation for the unit.                     | "m"             |
| `description`| `str`        | A description of the unit.                         | "Length unit"   |
| `created_at` | `datetime`   | The creation timestamp of the unit.                | "2024-01-01T00:00:00" |

--- 

This concludes the documentation for the schemas in `app/schemas/utils.py`.

