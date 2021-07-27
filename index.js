function superbowlWin(array) {
  let outcome = array.find( function(s) { 
    return s.result === "W"
  })
  return ( outcome ? outcome.year : undefined)
}
