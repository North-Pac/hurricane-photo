# Software Requirements

## Vision

### What is the vision of this product / What pain point does this project solve?

Changing a black and white photo to colorize and make it accessible. Being able to take in older pictures and add some colorizations to peek into the past with the lense of the person who actually took the picture

### Why should we care about your product?

It's free with no ads and easy to use, consumer friendly.

## Scope (In/Out)

Upload black and white pictures to colorize and save them to personal gallery as well as ability to delete them.

**Out of scope**, App won't let users to select their own colors. Won't use text to the photos either.

## Minimum Viable Product

### What will your MVP functionality be?

A FastAPI back end. React front end using openCV/ML/Neural networks to colorize/de-colorize black and white photos.
Photo persistance on a DB for user to come back and reference or download.

## Stretch

### What are your stretch goals?

- Alternate photo styles? generalized enhancement/cartoony style/painted, - ML with different pretrained models to stylize the image
- Social aspects? Vote and comment on other users photos
- Open gallery of photos the tool as processed. **anonymized** maybe allow the user to opt their photos in or out of this portion.

## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

1. As a User, I want an accessible app where I can upload a black and white photo and colorize it without breaking the bank so that I can save money and have quality photos.
2. As a user, I want to be able to see a collection of my saved colorized photos, so that I can refer to them quickly and not have to re-upload them.
3. As a user, I would like to upload photos easily and fast, so I can show them off to my friends and family.
4. As a user, I would like to upload photos easily and fast, so I can show them off to my friends and family.
5. As a user I would like to access the originally uploaded images.

## Data Flow

- Go to the site, see the gallery, then login
- Once logged in, upload the black & white image to get colorized
- Traverse to personal gallery to view and delete images

## Non-Functional Requirements

### Security

- API keys
- Authentication and Authorized credentials
- Cookie Tokens

### Testability

- Use hyper-corn to test during development.
- Test backend with thunder client.
- Use pytest to test specific functions.
