// Homework#5 of Keeping Up With The Javascripts: ES6

const timeAdder = (v1, l1, v2, l2) =>
{
  const validVs = (x, y) => 
  {
    if (typeof x == "number" && typeof y == "number")
      {
        if (x > 0 && y > 0) return true;
        else return false;
      }
    else return false;
  }
  
  const validLs = (x, y) =>
  {
    if (typeof x == "string" && typeof y == "string")
      {
        const validLsValues = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
        if (validLsValues.includes(x) && validLsValues.includes(y)) return true;
        else return false;
      }
    else return false;
  }
  
  const isPosible = (x1, x2, a1, a2) =>
  {
    const labelsFormat = [a1.endsWith("s"), a2.endsWith("s")];
    if (((x1 > 1 && labelsFormat[0] == true) && (x2 > 1 && labelsFormat[1] == true)) 
     || ((x1 > 1 && labelsFormat[0] == true) && (x2 == 1 && labelsFormat[1] == false))
     || ((x1 == 1 && labelsFormat[0] == false) && (x2 > 1 && labelsFormat[1] == true))
     || ((x1 == 1 && labelsFormat[0] == false) && (x2 == 1 && labelsFormat[1] == false))) return true;
    else return false;
  }
  
  // #region Extra Credit:
  const formatTime = (t) =>
  {
    let max = false;
    do
      {
        switch (t[1])
          {
            case "hour":
            case "hours":
              if (t[0] % 24 == 0)
                {
                  t[0] = t[0] / 24;
                  if (t[0] > 1) t[1] = "days";
                  else t[1] = "day";
                }
              break;
            case "minute":
            case "minutes":
              if (t[0] % 60 == 0)
                {
                  t[0] = t[0] / 60;
                  if (t[0] > 1) t[1] = "hours";
                  else t[1] = "hour";
                }
              break;
            case "second":
            case "seconds":
              if (t[0] % 60 == 0)
                {
                  t[0] = t[0] / 60;
                  if (t[0] > 1) t[1] = "minutes";
                  else t[1] = "minute";
                }
              break;
            default:
              max = true;
              break;
          }
      }
      while (!max)
      return t;
  }
  // #endregion
  
  let timeAdded = [0, ""];
  const areLsValid = validLs(l1, l2);
  const areVsValid = validVs(v1, v2);
  if (areLsValid && areVsValid && isPosible(v1, v2, l1, l2))
    {
      switch (l1)
      {
        case "day":
        case "days":
          switch (l2)
          {
            case "day":
            case "days":
              timeAdded[0] = v1 + v2;
              timeAdded[1] = "days";
              break;
            case "hour":
            case "hours":
              timeAdded[0] = v1 * 24 + v2;
              timeAdded[1] = "hours";
              break;
            case "minute":
            case "minutes":
              timeAdded[0] = v1 * 1440 + v2;
              timeAdded[1] = "minutes";
              break;
            case "second":
            case "seconds":
              timeAdded[0] = v1 * 86400 + v2;
              timeAdded[1] = "seconds";
              break;
            default:
              break;
          }
          break;
        case "hour":
        case "hours":
          switch (l2)
          {
            case "day":
            case "days":
              timeAdded[0] = v1 + v2 * 24;
              timeAdded[1] = "hours";
              break;
            case "hour":
            case "hours":
              timeAdded[0] = v1 + v2;
              timeAdded[1] = "hours";
              break;
            case "minute":
            case "minutes":
              timeAdded[0] = v1 * 60 + v2;
              timeAdded[1] = "minutes";
              break;
            case "second":
            case "seconds":
              timeAdded[0] = v1 * 3600 + v2;
              timeAdded[1] = "seconds";
              break;
            default:
              break;
          }
          break;
        case "minute":
        case "minutes":
          switch (l2)
          {
            case "day":
            case "days":
              timeAdded[0] = v1 + v2 * 1440;
              timeAdded[1] = "minutes";
              break;
            case "hour":
            case "hours":
              timeAdded[0] = v1  + v2 * 60;
              timeAdded[1] = "minutes";
              break;
            case "minute":
            case "minutes":
              timeAdded[0] = v1  + v2;
              timeAdded[1] = "minutes";
              break;
            case "second":
            case "seconds":
              timeAdded[0] = v1 * 60 + v2;
              timeAdded[1] = "seconds";
              break;
            default:
              break;
          }
          break;
        case "second":
        case "seconds":
          switch (l2)
          {
            case "day":
            case "days":
              timeAdded[0] = v1  + v2 * 86400;
              timeAdded[1] = "seconds";
              break;
            case "hour":
            case "hours":
              timeAdded[0] = v1  + v2 * 3600;
              timeAdded[1] = "seconds";
              break;
            case "minute":
            case "minutes":
              timeAdded[0] = v1  + v2 * 60;
              timeAdded[1] = "seconds";
              break;
            case "second":
            case "seconds":
              timeAdded[0] = v1  + v2;
              timeAdded[1] = "seconds";
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      timeAdded = formatTime(timeAdded);
      return timeAdded;
    }
  else
  {
    return false;
  }
}

function Time(q, t)
{
  this.qntt = q;
  this.type = t;
}

const time1 = new Time(47, "hours");
const time2 = new Time(3600, "seconds");
const timeAdded = timeAdder(time1.qntt, time1.type, time2.qntt, time2.type);
if (timeAdded != false) console.log(` ${time1.qntt} ${time1.type} + ${time2.qntt}` +
                                    ` ${time2.type} is equal to ${timeAdded[0]}` +
                                    ` ${timeAdded[1]}.`); 
else console.log(` The times were informed incorrectly.`);