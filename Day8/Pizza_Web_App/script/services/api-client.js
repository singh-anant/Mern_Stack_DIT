/* 
Network Talk
HTTP/HTTPS
ASYNC Call,Promises
a>then b>catch
*/
/* const URL =
  "https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json";
 */

async function makeNetworkCall(URL) {
  // Predefined method(ES6)-wrapper method XML-HTTP request
  /*  const promise = fetch(URL);
  promise
    .then((response) => {
      // Header+Body
      const promise2 = response.json();
      promise2.then((data) => {}).catch((err) => {});
    })
    .catch((err) => {}); */
  try {
    const result = await fetch(URL);
    const data = await result.json();
    /*     console.log(data); */
    return data;
  } catch (err) {
    throw err;
  }
}

export default makeNetworkCall;
