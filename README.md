# Assignment: **JavaScript Concepts in Action**

## **Objective**
Create a mini project that demonstrates your understanding of the following JavaScript concepts:

1. Rest and Spread Operators
2. Logical Operators
3. Short Circuiting
4. Ternary Operator
5. Destructuring
6. Template Literals

---

## **Instructions**
Create a **JavaScript file** where you design a **profile manager** application. The app should allow users to create, view, and modify profiles.

---

## **Tasks**

### 1. **Create Profiles (Use Rest Operator)**
Write a function called `createProfile` that accepts an arbitrary number of arguments (like name, age, hobbies, etc.) using the **rest operator** and returns a profile object.

```javascript
function createProfile(...args) {
  // Example: args = ["John", 25, "Coding", "Reading"]
  // Your implementation here
}
```

---

### 2. **Update Profile (Use Spread Operator)**
Write a function called `updateProfile` that takes a profile object and some updates, then uses the **spread operator** to create and return a new updated profile.

```javascript
function updateProfile(profile, updates) {
  // Example: profile = {name: "John", age: 25}
  // updates = {age: 26}
  // Your implementation here
}
```

---

### 3. **View Profile (Use Template Literals)**
Write a function called `viewProfile` that takes a profile object and prints a formatted string using **template literals**.

```javascript
function viewProfile(profile) {
  // Example Output: "Name: John, Age: 25, Hobbies: Coding, Reading"
}
```

---

### 4. **Add Hobbies (Use Logical Operators and Short Circuiting)**
Add a method to check if a `hobbies` property exists in the profile. If not, initialize it with an empty array. Use **logical operators** or **short circuiting** to handle this.

```javascript
profile.hobbies = profile.hobbies || [];
```

---

### 5. **Destructuring Profiles**
Write a function `getProfileDetails` that takes a profile object and uses **destructuring** to extract and return specific properties (e.g., name and age).

```javascript
function getProfileDetails(profile) {
  // Your implementation here
}
```

---

### 6. **Check Profile Age (Use Ternary Operator)**
Write a function `checkProfileAge` that checks if the user's age is 18 or above. Use a **ternary operator** to return "Adult" or "Minor".

```javascript
function checkProfileAge(profile) {
  // Your implementation here
}
```

---

## **Requirements**
1. Use **meaningful variable names** and write **clean code**.
2. Handle **edge cases** (e.g., what if the user doesn't provide certain data?).
3. Comment your code to explain the logic where necessary.

---

## **Example Usage**

```javascript
const profile = createProfile("Alice", 30, "Painting", "Hiking");
console.log(viewProfile(profile)); 
// Output: "Name: Alice, Age: 30, Hobbies: Painting, Hiking"

const updatedProfile = updateProfile(profile, { age: 31, hobbies: ["Cooking"] });
console.log(viewProfile(updatedProfile)); 
// Output: "Name: Alice, Age: 31, Hobbies: Cooking"

console.log(checkProfileAge(updatedProfile)); 
// Output: "Adult"

const { name, age } = getProfileDetails(updatedProfile);
console.log(`Extracted: Name - ${name}, Age - ${age}`);
```

---

## **Bonus**
- Add a feature to delete a specific hobby from the profile.
- Use a **default parameter** for `createProfile` to handle cases where no data is passed.

---

This assignment allows students to implement all the listed concepts in a practical and cohesive way.
