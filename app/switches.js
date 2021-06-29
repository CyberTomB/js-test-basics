// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {
    let dayTest = day.toLowerCase()
    let dayNum = 0
    switch (dayTest) {
        case 'sunday':
            dayNum = 1
            break;
        case 'monday':
            dayNum = 2
            break;
        case 'tuesday':
            dayNum = 3
            break;
        case 'wednesday':
            dayNum = 4
            break;
        case 'thursday':
            dayNum = 5
            break;
        case 'friday':
            dayNum = 6
            break;
        case 'saturday':
            dayNum = 7
            break;
    }
    if (dayNum != 0) {
        if (offset == true) {
            console.log(dayNum)
            if (dayNum == 1) {
                return 7;
            } else {
                return dayNum - 1
            }
        } else {
            return dayNum
        }
    } else {
        return "That's not a day of the week"
    }
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
    let rating = score - par
    if (rating >= 3) {
        return "Ouch"
    } else {
        switch (rating) {
            case -3:
                return "Ace"
                break;
            case -2:
                return "Eagle"
                break;
            case -1:
                return "Birdie"
                break;
            case 0:
                return "Par"
                break;
            case 1:
                return "Bogie"
            case 2:
                return "Double Bogie"
        }
    }
}


// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
    let countChange = 0
    let status = ''
    switch (card) {
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            countChange = 1
            break;
        case "7":
        case "8":
        case "9":
            countChange = 0
            break;
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
            countChange = -1
            break;
        default:
            countChange = 0
    }
    count += countChange
    if (count > 0) {
        status = ' Bet'
    } else {
        status = ' Hold'
    }
    return count + status
}
