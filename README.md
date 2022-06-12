# Interval_Count
Interval counter in Javascript for WEB projects

---

This repository contains a script that is a modification of the **Countdown Time** script provided by *w3schools*.

This new script makes it possible to view remaining session time and idle time.

The original script was modified and saved in this project in the "assets" folder with the name *interval_count.js*.

In that folder there is also another file, otherscripts.js, with a date format conversion function for tests and visualizations according to some projects in this repository.

---
# Examples
Some usage examples are also available below:

In each example below, the time intervals in the Interval_count.js file have been configured differently.

- **HTML_Projects\Interval_Count folder**:
> - contains two html files as examples of applicability (*index1.html*, *index2.html*)
> - copy from *Assets* folder
> - In the index2 file, a "Usuário faz algo" ("User does something") button was implemented to simulate user action that affects the inactivity time counter.
> 
> **Note:** *I recommend using the Mozila Firefox browser, because between it and other browsers I tested (Microsoft Edge and Google Chrome) it was the one I got a satisfactory result of viewing this test directly in the html.*


- **Django_Projects\django_interval_count**:
> - contains a project with the **Django Framework v4.0** and the **django-auto-logout v0.5** package
> - contains a **SQLite** database named "db_interval_count.sqlite3"
> - the maximum active session time has been set to 30 minutes
> - the maximum idle time has been set to 5 minutes
> 
> **Note:** To test click on Login and fill the user credentials with 'Admin' and password with '123'

---
# Resources
**Countdown Time** script available at: https://www.w3schools.com/howto/howto_js_countdown.asp

**Django**: https://www.djangoproject.com/

**django-auto-logout**: https://pypi.org/project/django-auto-logout/

**SQLite**: https://www.sqlite.org/index.html
