# Rickdiculous Mortydom

You're building a fan site for Rick and Morty lovers. The application will use data from an open source API. Your task is to use that data to design the app.

## About HTTP Client

HTTP Client allows your Angular application to communicate with other applications. Because Angular specializes in dynamically displaying data, it usually needs to fetch that data from other APIs.

HTTP Client is a built-in service for sending and receiving data.

The API offers a REST backend that can be used to access the data:
* [Rick and Morty API Official](https://rickandmortyapi.com/documentation/#rest)

## Topics

- CRUD and API anatomy
- Request objects
- Response objects
- Observables

### Requirements

The final app must have the following features:
- Search episodes
- Display lists of search results
- Detail pages for each episode
- Favorites list

## Stories and AC

The stories for episodes apply to characters and locations as well. Start with Episodes then implement location and characters once you get into a good workflow with`HTTPClient` and services.

### Episodes Feature

**As a user, I can browse the episodes of Rick and Morty so that I can read about each one.**
* When I visit the home page
* Then I can see a list of Rick and Morty episodes with thumbnails and links.

*My Tasks*

Using TDD (and in no particular order): 

1. Create a home/landing page 
1. Create a container/list component for the episodes.
1. Create a component to display individual episodes.
1. Create a service to fetch episodes from the Rick and Morty API.
1. Create a model for `Episode` based on the API schematics.
1. Inject the service into the list component. 

Follow example to create your own tasklists for the remaining acceptance criteria. It's helpful to take notes and write them down as you go, so your team can easily reference them. Of course, you can create as many tasks as you feel are necessary to implement the feature.

----
Create a new task list for the following criteria:
- Given a list of episodes
- When I select an episode
- Then I can view the details page for it.

Create a new task list for the following criteria:
- Given an episode
- When I view the details page 
- Then I can see all episode information and the characters featured in it.

----

**As a user, I can search the episodes so that I can find what I'm looking for.**

- Given I enter a search term 
- When I submit the form 
- Then I can view all matching results

## Resources 

Everything you need to implement these features can be found in the resources below. Don't forget you can also refer to previous exercises, demos and exmaples. 

- [DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp)
- [Testing Guide](../05-testing/01-unit-overview.md)
- [Angular Component Testing](https://angular.io/guide/testing-components-scenarios)
- [Angular HTTP Client](https://angular.io/guide/http)
- [Jasmine Cheatsheet 1](https://docs.w3cub.com/cheatsheets/jasmine.html)
- [Jasmine Cheatsheet 2](https://daveceddia.com/jasmine-2-spy-cheat-sheet/)
- [About Test Fakes](https://www.martinfowler.com/bliki/TestDouble.html)
