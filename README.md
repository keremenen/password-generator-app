# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Password Strength Math Model](#password-strength-math-Model)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options ✅
- Copy the generated password to the computer's clipboard ✅
- See a strength rating for their generated password ✅
- View the optimal layout for the interface depending on their device's screen size ✅
- See hover and focus states for all interactive elements on the page ✅

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/password-generator-app-yD8l_YjHT_)
- Live Site URL: [Live Site URL](https://password-generator-app-kemer.netlify.app/)

## My process

### Password Strength Math Model

To calculate password strength, I'm using a scoring system based on the length of the password and the inclusion of different character types (uppercase, lowercase, numbers, symbols). Here's a simple mathematical model to determine the password strength:

Password Length: The longer the password, the stronger it is.
Character Types: The more diverse the character types, the stronger the password.
Here's a possible scoring system:

#### Length Score:

- 0-5 characters: 0 points
- 6-10 characters: 1 point
- 11-15 characters: 2 points
- 16+ characters: 3 points

#### Character Type Score:

- Include uppercase letters: 1 point
- Include lowercase letters: 1 point
- Include numbers: 1 point
- Include symbols: 2 points

The total score will be the sum of the length score and the character type score. Based on the total score, you can define the strength levels:

- Too Weak: 0-2 points
- Weak: 3-4 points
- Medium: 5-6 points
- Strong: 7-8 points

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Vite](https://vite.dev/) - Frontend Tool
- [Shadcn](https://ui.shadcn.com/) - UI Component Library
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Author

- Frontend Mentor - [@keremenen](https://www.frontendmentor.io/profile/keremenen)
