# un-vote

We now have resolution and vote schemas. 
We also have seven routes:

1. "/votes" : this returns all votes (We probably should remove this)
2. "/year/:id" : you input a year and it returns all resolutions of that year
3. "/r-votes/:id" : returns the the votes of a specific resolution
4. "/resolutions" : returns all resolutions (We probably have to limit the output to only 100 results for now)
5. "/resolutions/resid/:id" : returns the details of a resolution 
6. "/votes/country/:id" : returns the votes of each country
7. "/votes/country" : this just shows the list of the countries searchable for  "/votes/country/:id"

Next steps: 
1. make an html template for the resolutions with their details and votes. A mix between "/resolutions" and "/r-votes/:id"
2. make an html template for the country page. Takes data from "/votes/country/:id"
3. make country votes and resolutions clickable which by redirecting.