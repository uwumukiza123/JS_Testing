/**Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th" */

function whatCentury(year)
{
  // code must go here
  const cent = getCentury(year).toString()
  const [a,b] = [...cent]
  if(a>1){
    switch(b){
        case '1':{
          return`${getCentury(year)}st`
          break
        }
        case '2':{
          return`${getCentury(year)}nd`
          break
        }
        case '3':{
          return`${getCentury(year)}rd`
          break
        }
        default:{
          return`${getCentury(year)}th`
        }
    }
  }else {
    return`${getCentury(year)}th`
  }
}

function getCentury(year){
  const [a,b,...rest] = [...year]
  const su = a+b
  return check(...rest) ? +su : +su + 1 
}

function check(...rest){
  return rest.every(el => el == 0)
}