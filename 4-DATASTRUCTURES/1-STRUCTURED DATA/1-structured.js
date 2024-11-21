// Structured data refers to a standardized format for providing information about a webpage and classifying its content. 
// Search engines like Google use this structured format to better understand the content of the page and display relevant information in search results, beyond just reading the text.
// It is also coded using in-page markup on the page that the information applies to.
// Whether the website is for products, reviews, blogs, or services, Structured Data helps search engines identify key information—so your site appears more relevant in search results. 
// For eg: If you’re running an e-commerce site, Structured Data can highlight things like price, ratings, and availability right in the search results, making you stand out to potential buyers—not just browsers. 

// Schema markup( a specific type of structured data) can be added directly in your HTML code(known as in-page markup) using script formats like JSON-LD (JavaScript Object Notation for Linked Data) .
// Just place the JSON-LD inside your webpage’s <script> tag without affecting the page content itself. You can also utilize Google's Rich Results Test to ensure your Structured Data follows Google’s guidelines for rich results in search.
// For platforms like WordPress or Squarespace, plugins can automatically handle it for you!
// Addition: By setting up Google Search Console in our website, we can  monitor and manage our website's performance in google search results.

// --------------------------------------------------------------------------------------------------------
// STRUCTRED DATA FOR BLOG POST
// <html>
// <head>
//     <title>My cool vacation</title>
//     <script type="application/ld+json">
//     {
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         "author": {
//             "@type": "Person",
//             "name": "Ryan Levering",
//             "url": "http://twitter.com/rrlevering"
//         }
//     }
//     </script>
// </head>
// <body>
//     <p>For summer vacation, I visited Antarctica. It’s very cool.</p>
// </body>
// </html> 


// ----------------------------------------------------------------------------------------
// STRUCTURED DATA FOR SIMPLE RECIPE POST
//  <html>
//   <head>
//     <title>Party Coffee Cake</title>
//     <script type="application/ld+json">
//     {
//       "@context": "https://schema.org/",
//       "@type": "Recipe",
//       "name": "Party Coffee Cake",
//       "author": {
//         "@type": "Person",
//         "name": "Mary Stone"
//       },
//       "datePublished": "2018-03-10",
//       "description": "This coffee cake is awesome and perfect for parties.",
//       "prepTime": "PT20M"
//     }
//     </script>
//   </head>
//   <body>
//     <h2>Party coffee cake recipe</h2>
//     <p>
//       <i>by Mary Stone, 2018-03-10</i>
//     </p>
//     <p>
//       This coffee cake is awesome and perfect for parties.
//     </p>
//     <p>
//       Preparation time: 20 minutes
//     </p>
//   </body>
// </html> 

// ----------------------------------------------------
// STRUCTURED DATA FOR RECIPE POST
// <html>
//   <head>
//     <title>Apple Pie by Grandma</title>
//     <script type="application/ld+json">
//     {
//       "@context": "https://schema.org/",
//       "@type": "Recipe",
//       "name": "Apple Pie by Grandma",
//       "author": "Elaine Smith",
//       "image": "https://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
//       "description": "A classic apple pie.",
//       "aggregateRating": {
//         "@type": "AggregateRating",
//         "ratingValue": 4.8,
//         "reviewCount": 7462,
//         "bestRating": 5,
//         "worstRating": 1
//       },
//       "prepTime": "PT30M",
//       "totalTime": "PT1H30M",
//       "recipeYield": 8,
//       "nutrition": {
//         "@type": "NutritionInformation",
//         "calories": "512 calories"
//       },
//       "recipeIngredient": [
//         "1 box refrigerated pie crusts, softened as directed on box",
//         "6 cups thinly sliced, peeled apples (6 medium)"
//       ]
//     }
//     </script>
//   </head>
//   <body>
//   </body>
// </html>