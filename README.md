# Rastro's Kitchen

## About

This project will eventually be a recipe repository website where users can upload and browse their own recipes.

Access will be limited to trusted friends/family, this will not be a large-scale project. That would lead to both copyright/IP concerns as well as a serious upgrade to security practices. While these would prove interesting challenges, they are not within the timeframe or goals of this project.

Planned launch: Late August/Early September 2022 (hopefully)

## To-Do (Loosely in order)

- Recipe Submission System/Forms
    - Basic Recipe Info
        - Title
        - Description
        - Tags (e.g. allergens, dietary restrictions, required tools/utensils)
    - Recipe Ingredients
        - Optionally divided into "sets" for organization
    - Recipe Steps
        - Optionally divided into "sets" for organization
    - "Preservation/Autosave/WIP" system (likely will require DB setup)
        - Prevent loss of data in event of form/server/user error
        - Allow for drafting/"finish later"
- Database
    - Store recipes in JSON format
    - Allow for conveient lookup/editing of entries
    - Basic search engine/filtering
    - Associate recipes with user accounts
- User Accounts
    - Allow for editng/removal of own recipes
    - Bookmarking/Favoriting system
    - Submit comments on recipes
    - View profile/user's submitted recipes
    - Administrator account(s)
- Styling
    - Make it not hideous
    - CSS styles for all pages
    - Usable mobile layout


## Finished Features

- lol

## Technology Used
- Node.js
    - Express
    - Nunjucks
- Undetermined Database Solution (likely SQL based)