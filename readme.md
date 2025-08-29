## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

# Answer the following questions clearly:

## Qsn: 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

## Ans:

_1. getElementById :_👉🏻
**An element in an HTML file is called by selecting a specific ID.**
_For example:_👇🏻

```
HTML

<button id="btn1">click</button>
<button id="btn2">click</button>
<button id="btn3">click</button>
<button id="btn4">click</button>

JS

<script>
document.getElementById("btn1");
</script>
```

_2. getElementByClassName :_👉🏻
**It is used to select elements of the same class in an HTML file by giving them a class.**
_For example:_👇🏻

```
HTML

<button class="btn">click</button>
<button class="btn">click</button>
<button class="btn">click</button>
<button class="btn">click</button>

JS

 <script>
   document.getElementsByClassName("btn");
 </script>
```

_3. querySelector :_👉🏻
**It is said to select the first element of the HTML file. Be it a tag name or class or id**
_For example:_👇🏻

```
HTML

<button class="btn">click</button>
<button class="btn">click</button>
<button class="btn">click</button>
<button class="btn">click</button>

JS

 <script>
   document.querySelector(".btn");
 </script>
```

_4. querySelectorAll :_👉🏻
**It is said to select all elements in an HTML file by tag name or class or id.**
_For example:_👇🏻

```
HTML

 <h1>Hallo - 1</h1>
 <h1>Hallo - 2</h1>
 <h1>Hallo - 3</h1>
 <h1>Hallo - 4</h1>
 <h1>Hallo - 5</h1>

JS

 <script>
   document.querySelectorAll("h1");
 </script>
```

## Qsn: 2. How do you **create and insert a new element into the DOM**?

## Ans:

**I will first get a container from the HTML as its parent. Then I will take the new element. Then I will append it to its parent.**
_For example:_👇🏻

```
JS

const callHistoryContainer = document.getElementById(
"call-history-container"
);
const newEl = document.createElement("div");
newEl.innerHTML = `<div class="flex justify-between items-center bg-slate-100 p-3 rounded-lg shadow-md">
          <div>
            <h1 class="text-[18px] font-bold">${callerName}</h1>
            <p class="text-[#5c5c5c] text-[18px] mt-1">${callerNumber}</p>
          </div>
          <div>${newTime}</div>
        </div>`;
callHistoryContainer.appendChild(newEl);
```

## Qsn: 3. What is **Event Bubbling** and how does it work?

## Ans:

**To rotate an element into a branch of an HTML file. That is, like a tree with branches.**
_For example:_👇🏻

```
JS

const callBtns = document.getElementsByClassName("call-btn");
const callerName =
callBtn.parentNode.parentNode.children[0].children[0].children[1]
.innerText;
const callerNumber =
callBtn.parentNode.parentNode.children[0].children[0].children[3]
.innerText;
```

## Qsn: 4. What is **Event Delegation** in JavaScript? Why is it useful?

## Ans:

_Event Delegation:_ 👉🏻
**It is said to handle the events of the children of that parent element by using addEventListener once in a Parent element of the HTML file.**
_For example:_👇🏻

```
HTML

<h1>Explore the concept of Event Delegate</h1>
    <ol id="item-list">
      <li class="item">My Awesome item 1</li>
      <li class="item">My Awesome item 2</li>
      <li class="item">My Awesome item 3</li>
      <li class="item">My Awesome item 4</li>
      <li class="item">My Awesome item 5</li>
      <li class="item">My Awesome item 6</li>
    </ol>
```

    JS

    document
        .getElementById("item-list")
        .addEventListener("click", function (event) {
          event.target.parentNode.removeChild(event.target);
        });
        document
        .getElementById("btn-add-item")
        .addEventListener("click", function () {
          const ol = document.getElementById("item-list");
          const li = document.createElement("li");
          li.classList.add("item");
          li.innerText = "Brand new item added";
          ol.appendChild(li);
        });

## Qsn: 5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Ans:

_1. preventDefault():_👉🏻
**is called to prevent the default action. That is, the event will occur, but its default action will not be performed.**
_For example:_👇🏻

```

JS

document.getElementById("btn-login").addEventListener("click", function (e) {
e.preventDefault();
const mobileNumber = 8801315315449;
const pinNumber = 1234;
const mobileNumberValue = document.getElementById("mobile-number").value;
const mobileNumberValueConvert = parseInt(mobileNumberValue);

const pinNumberValue = document.getElementById("pin-number").value;
const pinNumberValueConvert = parseInt(pinNumberValue);

if (
mobileNumberValueConvert === mobileNumber &&
pinNumberValueConvert === pinNumber
) {
window.location.href = "./home.html";
} else {
alert("Invalid credentials");
}

});

```

_2. stopPropagation():_👉🏻
**Called to stop the bubbling of the event. So that it does not go to the parent element.**
_For example:_👇🏻

```
I couldn't figure out the example😓
```

## Note: All the examples given here have been copied from previous modules.

---
