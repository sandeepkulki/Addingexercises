// Arrow characters to use: ▼ ▶ •

const backendData = [
  {
    id: "1",
    name: "Office Map"
  },
  {
    id: "2",
    name: "New Employee Onboarding",
    children: [
      {
        id: "8",
        name: "Onboarding Materials"
      },
      {
        id: "9",
        name: "Training"
      }
    ]
  },
  {
    id: "3",
    name: "Office Events",
    children: [
      {
        id: "6",
        name: "2018",
        children: [
          {
            id: "10",
            name: "Summer Picnic"
          },
          {
            id: "11",
            name: "Valentine's Day Party"
          },
          {
            id: "12",
            name: "New Year's Party"
          }
        ]
      },
      {
        id: "7",
        name: "2017",
        children: [
          {
            id: "13",
            name: "Company Anniversary Celebration"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Public Holidays"
  },
  {
    id: "5",
    name: "Vacations and Sick Leaves"
  }
];
var objs = [
  { first_nom: "xnsas", last_nom: 'aJamf' },
  { first_nom: "namsn", last_nom: 'cJamf' },
  { first_nom: "Bansas", last_nom: 'Prentice' },
  { first_nom: "Arihant", last_nom: 'bJamf' }
];
let str = "js stRing exeRcises 12344"
let str1 = str.toLowerCase();
str1 = str.split(" ").map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ');
interchange = str.split(" ").map(elem => elem.split('').map(char => char.charCodeAt() > 90 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ');
console.log("change cases   :" + interchange);
console.log("Title casing   :" + str1);


//

function compare(a, b) {

  let n = a.last_nom.localeCompare(b.last_nom);

  // console.log(n, "   ******comparing strings");
  return n;


}


/*   doesn't work   ****   compare((a, b) => {
  let n = a.last_nom.localeCompare(b.last_nom);

  return n;

});*/
console.log(objs.sort(compare));

let toSortEO = [1, 4, 8, 23, 5, 6, 7, 88, 89, 3, 15]
/*toSortEO.sort();
let tempArr = [];
let j = 0;
console.log(toSortEO)
let arrLnt = toSortEO.length - 1;*/

/*
Solution 1 

toSortEO.forEach((item, i) => {
  if (item % 2 == 0) { tempArr[j] = item; j++; } else { tempArr[arrLnt] = item; arrLnt-- }
});
console.log(tempArr);*/

// solution 2
toSortEO.sort().sort((x, y) => { return x % 2 !== 0 ? 1 : y == x % 2 !== 0 ? -1 : 0; });

console.log("ODD EVEN SORTED ...." + toSortEO);
console.log(toSortEO)
let myObj1 = { myarr: [1, 2, 3, 4, 5] }
let trArray = [1, 2, 4, 8, 23, 5, 6, 7, 88, 89, 3, 15];
const target = 12;
//let trArray = trArray.map(elem => target - elem)
/*Object.assign(...targetArr, ...toSortEO)
console.log("&&&&@&&#&$&&@&$&#$@#&$#@");
  console.log(targetArr);*/
console.log(Array.isArray(myObj1.myarr))
console.log(trArray)
let matching_index = [];
let myObj = new Object();
for (let i = 0; i < trArray.length; i++) {

  let currentMatch = target - trArray[i];

  //myObj.assign(trArray[i], currentMatch)



  /* for(let j = i+1; j < toSortEO.length;j++){
     if(currentMatch  === toSortEO[j]){
       matching_index.push(i+":"+j);
     }
   } */

}

console.log(" indexes summing up " + myObj + " to total are " + matching_index);
console.log(myObj);


function findCommonElements2(arr1, arr2) {

  let elementarr = [];
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {

    if (!obj[arr1[i]]) {

      const element = arr1[i];
      obj[element] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {

    if (obj[arr2[j]]) {
      elementarr.push(arr2[j])
    }
  }
  return elementarr;
}


// Iterate through each element in the 
// first array and if some of them  
// include the elements in the second 
// array then return true. 

let array11 = [1, 2, 5, 6, 8, 10, 12, 13, 14];
const searchN = 2;

function searchResult(arr, elem) {
  let arrMid = parseInt(arr.length / 2);
  console.log("Midarrray ", arr[arrMid], " for array ", arr, " searching ", elem == arr[arrMid]);
  let searched = "";
  if (elem === arr[arrMid]) {
    return true;
  }
  else if (elem < arr[arrMid]) {
    arr = arr.splice(0, arrMid);
    searchResult(arr, elem)
  }
  else if (elem > arr[arrMid]) {
    arr = arr.splice(arrMid);
    searchResult(arr, elem)
  }

  return searched;




}

console.log("Finding recursive solution")
console.log("Now The result", searchResult(array11, 2));


const array1 = ['a', 'b', 'x', 'z'];
const array2 = ['k', 'x', 'c', 'z']


function findCommonElements3(arr1, arr2) {
  let elementarr = [];
  arr1.forEach(element => {
    if (arr2.includes(element))
      elementarr.push(element)
  });
  return elementarr;
}

console.log((findCommonElements3(array1, array2)));

let ggg = 3;
const myPromise = new Promise((resolve, reject) => {
  if (ggg === 0) {
    resolve('Hello, I am Zero number!');
  }

  else if (ggg >= 1) {
    resolve('Hello, I am Zero number!');
  }
  reject(new Error('I failed some times'));
})
var isPalidrome = str => str == str.split('').reverse().join('');
console.log("gadig" + isPalidrome("gadig"));

myPromise.then(value => console.log("inside then" + value)).catch(err => console.log("in catch" + err))

function fetchData() {
  return new Promise(resolve => {
    setTimeout(resolve, 100, backendData);
  });
}
let data = fetchData();
function openChild(ulId) {

  if (document.getElementById(ulId).classList.contains("show")) {
    document.getElementById(ulId).classList.remove("show")
  }
  else {
    document.getElementById(ulId).classList.add("show")
  }
}

let childList = function addChildToList(childArr) {
  let childArrList = '';
  childArrList += `<li class='haveChildren'> <span class='caret' onclick="openChild(${childArr.id})">  ${childArr.name} </span>
                                  <ul class='nested' id= ${childArr.id} >`


  childArr.children.forEach(child => {
    if (child.children) {
      let addNested = childList(child);
      childArrList += addNested;
    }
    else {
      childArrList += `<li class='noChild'id=${child.id}>  ${child.name} </li>`
    }
  })
  /*for (let j = 0; j < childArr.children.length; j++) {
    if (childArr.children[j].children) {
      let addNested = childList(childArr.children[j])
      childArrList += addNested;
    }
    else {
      childArrList += `<li class='noChild'id=${childArr.children[j].id}>  ${childArr.children[j].name} </li>`
    }
  }*/
  childArrList += `</ul></li>`


  return childArrList;
}
data.then((value) => {
  console.log(value)

  let list = `<ul id='myUL'>`

  value.forEach(element => {
    if (element.children) {
      let addNested = childList(element)
      list += addNested;
    }
    else {
      list += `<li class='noChild' id=${element.id}> <span class='dot'>  ${element.name} </span> </li>`

    }


  });
  list += '</ul>'
  /* for (let i = 0; i < value.length; i++) {
    if (value[i].children) {
      let addNested = childList(value[i])
      list += addNested;
    }

    else {
      list += `<li class='noChild' id=${value[i].id}> <span class='dot'>  ${value[i].name} </span> </li>`

    }
    list += '</ul>'


  }*/


  document.getElementById('container').innerHTML = list;

  let todaysDate = new Date();
  let formatedDate = `${todaysDate.getDate()}/${todaysDate.getMonth()}/${todaysDate.getFullYear()}  ${todaysDate.getHours()}:${todaysDate.getMinutes()}:${todaysDate.getSeconds()}`
  console.log('Date for Today is : ', formatedDate)
  /*setInterval(function () {
     document.getElementById('todays').innerHTML = formatedDate;
   }, 10)*/

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parse(new Date()) + 1 * 1 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);

})


//Longest subsequense 

let indexArr = [2.5, 1.0, 2.6, 2.0, 2.7, 4.0, 2.9, 28];

console.log(indexArr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0));
let randArr = [25, 1, 26, 2, 27, 4, 29, 28, 45, 46];
// 1, 4, 25, 26, 27, 28, 29, 45, 46
randArr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
let longestSS = function getLongestSS(arr) {
  let count = 0;
  let tempCount = 0;
  let tempArr = []
  let longArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] + 1 == arr[i + 1] && i < arr.length) {
      if (longArr.length == 0) {
        console.log("Empty Longarr");
        longArr.push(arr[i]);
      }
      longArr.push(arr[i + 1]);
      count++;
      console.log("if:::  i ", i, "-->", arr[i], "count  ", count, "TempCount", tempCount, "Array: ", longArr)

    }
    else {
      // longArr.push(arr[i]);
      console.log("Else:::: i ", i, "-->", arr[i], "count  ", count, "TempCount", tempCount, "Array: ", longArr)
      if (tempCount == 0) {
        tempCount = count; count = 0; tempArr = longArr;
        longArr = [];
      }
      if (tempCount <= count) {
        tempArr = longArr;
        longArr = [];
        tempCount = count;
        count = 0;
      }

    }
  }
  return tempArr;
}
console.log("Final Long Array **@*#$*#@*$*@#$*@#*$*@#$*@#*$*@#$*@#*$*@#*$@*#$", longestSS(randArr))



// Delaying Forloop



function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function load() { // We need to wrap the loop into an async function for this to work
  for (var i = 0; i < 3; i++) {
    console.log(i);
    await timer(300); // then the created Promise can be awaited
  }
}

load();