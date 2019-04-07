/**
 * Easy HTTP Library
 * 
 *  @version 2.0.0 
 *  @author Tarald Johansen
 *  @licence MIT
 * 
 **/

 class easyHTTP {
   // Make HTTP GET request
   get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });

      
   }
 }