# 4.4 - Merge Sort

###### ICS4U - Mr. Brash 🐿️

"Split Search" was actually "Binary Search". I didn't want you Googling the code. **Merge sort** is _not_ a codename - that is what it's called. Try generating the code yourself - there is a lot of supporting material available here.

The algorithms for Bubble, Selection, and Insert sort are all very _linear_. They traverse the array one element at a time in a specific direction. Instead, we can break the array down into smaller pieces (in fact, down to the individual items) and when we _traverse back up the tree_, we can sort as we go. This creates a much faster sorting process. Here's an animation and still image from Wikipedia:

---

<img alt="Merge Sort Animation" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif" style="vertical-align: top;">
<img alt="Merge Sort Still Image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/1200px-Merge_sort_algorithm_diagram.svg.png" width="400px">

---

In the still image above you can see a "top-down" approach where we separate the sorting process into 'threads' that get taken care of in the green arrows (after fully separating into individual items). Those green arrows occur during the _return_ portion of the algorithm and the sort is performed by **copying** the data into a **new** array (we do not modify the original).

- [Here is the algorithm in action with playing cards](https://youtu.be/AMJjtTo1LLE).
- [Here is the algorithm in action as a folk dance](https://youtu.be/XaqR3G_NVoo) (I recommend speeding this one up).
- [And here is a very math-heavy one describing how it works](https://youtu.be/kgBjXUE_Nwc?t=182)
- [Explanation and pseudocode](https://www.youtube.com/watch?v=4VqmGXwpLqc) (_great_ resource)

### Merge Sort utilizes three functions

- `mergeSort(list)` { to start things off }
- `mergeSortHelper(list, from, to, tempList)` { this is the recursive one }
- `merge(list, from, mid, to, tempList)` { for putting the pieces back together }

Name the functions what you want, but essentially `mergeSortHelper` is the _recursive_ function. `tempList` starts as an empty array (same length as `list`) in which we place the sorted data. Note that we do _not_ sort in place - which means we don't touch the original array. The `merge` function copies, "merges", the data back together into `tempList`.

### Where to Start

**A.** `mergeSort(list)`:  Here we generate an empty array that is the same length as `list` and begin the recursive process:
>
>```JS
>// Generate an empty array of correct length
>let temp = new Array(list.length);
>mergeSortHelper(list, 0, list.length - 1, temp);
>```

**B.** `mergeSortHelper(list, from, to, tempList)`: Here we need to accomplish 4 things, assuming we have work to do (ie. until the base case is found).

1. Find the middle index (round if necessary) in order to split the current values into "left" and "right".
2. Recurse on the left half, in order to split it.
3. Recurse on the right halve, in order to split it.
4. Merge the two sides back together into `tempList` in a sorted order.

**C.** `merge(list, from, mid, to, tempList)`: One-by-one, copy from `list` to `tempList` in a sorted order. Lowest first, then the next, then the next. The values `from`, `mid`, and `to` are to assist with keeping track of where to begin and end.

---

Implement the `mergeSort` algorithm using JavaScript and the details given above. Test it on a relatively large array.

<br>

🐿️
