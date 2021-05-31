# un-vote

Our database and server work perfectly. 

## Seven server routes:

1. "/votes" : this returns all votes (We probably should remove this)
2. "/year/:id" : you input a year and it returns all resolutions of that year
3. "/r-votes/:id" : returns the the votes of a specific resolution
4. "/resolutions" : returns all resolutions (By default, we limit the number of results to 20 for now).

For this route, the request body can have these additional parameters: 

dateOrder: "incr" to sort resolutions in date-increasing order; anything else to sort in date-decreasing order. Defaults to "incr"

category: specifies a single category from which to allow the results (out of the results returned from the page size/number). If not specified, all categories allowed.

pagesize: specifies the number of resolutions to return, default 20

pagenum: describes which set of results to return (for example, pagesize 10 and pagenum 3 would return pages 20-29 before the category filter is applied), default 1

5. "/resolutions/resid/:id" : returns the details of a resolution 
6. "/votes/country/:id" : returns the votes of each country
7. "/votes/country" : this just shows the list of the countries searchable for  "/votes/country/:id"

## Three main HTML pages:
1. "home.html" is the home page. This probably will have general information and details about resolutions and countries...
2. "countries.html". This page has a list of countries. We aim to have a personalized page for each country. It also has the different votes to different resolutions. We might add statistics to it
3. "resolutions.html". This page has a list of the resolutions. Each resolution will have details


## Next steps: 
1. make an html template for the resolutions with their details and votes. A mix between "/resolutions" and  "/votes/country/:id" 
2. add more query parameters for fetches: dates, limits, number of reults by page.. 
3. Probably change the countries.html from having one page that outputs data about each country to a page that redirects to other html pages. This will make it easier later if we are trying to connect resolutions to countries by having an independent route to each country 
4. make country votes and resolutions clickable through redirect. 
5. Start working on CSS 
6. Start working with react 
7. add details about countries through API, add flags, fix names of countries. 



## Bugs to fix:
1. How to have a running server all the time 
2. Add more resolutions for example (play with the limit)
3. Countries with multiple words sometimes fail, change ' ' by another character might solve the problem


## Important resources:
https://www.un.org/styleguide/
https://developers.google.com/chart/interactive/docs/gallery/geochart
https://github.com/emrahonder/All-Countries-For-Google-GeoChart/blob/master/geochart-country-name.html
https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/12379
