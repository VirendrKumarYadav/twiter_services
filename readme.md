# Twitter Clone BE



<!-- API Documatation -->


## Endpoints

### Get Users

Get a list of users.

- **URL:** `/users`
- **Method:** `GET`
- **Parameters:**
  - None
- **Response:**
  - **200 OK:** Returns a JSON array of user objects.
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      },
      
    ]
    ```
  - **404 Not Found:** If no users are found.

### Get User Registration

Get a user Registration.

- **URL:** `/users`
- **Method:** `GET`
- **Parameters:**
  - `Username` (required): The Username of the user.
   - `Password` (required): The Password of the user.
     - `Email` (required): The Email of the user.
       - `Name` (required): The Name of the user.
- **Response:**
  - **200 OK:** Returns a JSON object repres


### Get User Login

Get a user Login.

- **URL:** `/users`
- **Method:** `POST`
- **Parameters:**
  - `Username` (required): The Username of the user.
   - `Password` (required): The Password of the user.
- **Response:**
  - **200 OK:** Returns a JSON object repres
  - JWT Token Returns



### Get /profile/updat

Get a /profile/update

- **URL:** `/profile/updat`
- **Method:** `patch`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   - `Password` (required): The Password of the user.
   -JWT tocken required for all
- **Response:**
  - **200 OK:** Returns a JSON object repres


<!-- Post Create -->


### To Creae User Post

Create User Post

- **URL:** `/post/`
- **Method:** `Post`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   -JWT tocken required for all
   --Post details Required
   {
    "userID":"6607e0cc422b349043d1c0f7",
    "summery":"this is post regarding the test of Post",
    "image":"abc.png"

}
- **Response:**
  - **200 OK:** Returns a JSON object repres

### To Get User Post

Get User Post

- **URL:** `/post/`
- **Method:** `Get`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   -JWT tocken required for all
   --Post details Required
 
- **Response:**
  - **200 OK:** Returns a JSON object repres

### To Update User Post

Update User Post

- **URL:** `/post/`
- **Method:** `Patch`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   -JWT tocken required for all
   --Post details Required
  
- **Response:**
  - **200 OK:** Returns a JSON object repres

### To Like User Post

Update User Post

- **URL:** `/post/`
- **Method:** `Patch`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   -JWT tocken required for all
   --Post details Required
   --Post ID Required
- **Response:**
  - **200 OK:** Returns a JSON object represent

### To Dislike User Post

Update User Post

- **URL:** `/post/`
- **Method:** `Patch`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   -JWT tocken required for all
   --Post details Required
   --Post ID Required
- **Response:**
  - **200 OK:** Returns a JSON object represent

### To Comment User Post

- **URL:** `/post/`
- **Method:** `Patch`
- **Parameters:**
  - `User Id` (required): The Username of the user.
   -JWT tocken required for all
   --Post details Required
   --Post ID Required
- **Response:**
  - **200 OK:** Returns a JSON object represent
