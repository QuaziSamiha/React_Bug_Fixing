// this function returns sortedPeople and sortedScores
//  it takes people, scores, sortBy (asc or desc) as arguments
export function zipSort(mainList, secondaryList, sortBy, extra = {}) {
  // mainList --> people
  // secondaryList --> score
  // console.log(mainList);
  let zipped = mainList.map((e, i) => [e, secondaryList[i]]);
  // console.log(zipped);

  // Sort the zipped array
  // zipped.sort((a, b) => {
  //   if (sortBy === "asc") return a[0].name.localeCompare(b[0].name);
  //   else return b[0].name.localeCompare(a[0].name);
  // });

  // ****************************** 1st Bug *******************************
  zipped.sort((a, b) => {
    if (sortBy === "asc") {
      // Sort by name in ascending order
      if (a[0].name !== b[0].name) {
        return a[0].name.localeCompare(b[0].name);
      } else {
        // If names are equal, sort by score in ascending order
        return a[1] - b[1];
      }
    } else {
      // Sort by name in descending order
      if (a[0].name !== b[0].name) {
        return b[0].name.localeCompare(a[0].name);
      } else {
        // If names are equal, sort by score in descending order
        return b[1] - a[1];
      }
    }
  });

  // Unzip the sorted array back into two separate arrays
  const sortedMainList = [];
  const sortedSecondaryList = [];
  for (let i = 0; i < zipped.length; i++) {
    sortedMainList[i] = zipped[i][0];
    sortedSecondaryList[i] = zipped[i][1];
  }

  return [sortedMainList, sortedSecondaryList];
}

export function getStyle(width) {
  const flexStyleLarge = {
    display: "flex",
    width: "400px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "6px 0",
  };

  const flexStyleSmall = {
    display: "flex",
    width: "250px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "3px 0",
  };

  if (width < 450) return flexStyleSmall;
  return flexStyleLarge;
}

export function binarySearch(name, sortBy, people) {
  let low = 0;
  let high = people.length - 1;
  const isAsc = sortBy === "asc";
  let index = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isAsc) {
      if (name.localeCompare(people[mid].name) <= 0) {
        index = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (name.localeCompare(people[mid].name) === 1) {
        index = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return index ?? people.length;
}
