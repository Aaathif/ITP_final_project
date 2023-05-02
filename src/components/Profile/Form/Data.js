export const options = [
    {id : '0', label: 'N/A'},
    {id : '1', label: 'Employee Behaviour'},
    {id : '2', label: 'Food Dissatisfaction'},
    {id : '3', label: 'Restuarant Related'},
    {id : '4', label: 'Suggestions'}
]

export const categories = [
    {id : '0', label: 'N/A'},
    {id : '1', label: 'Waiter was Rude'},
    {id : '2', label: 'Waiter was Tolerent'},
    {id : '3', label: 'Waiter was Lazy'},
    {id : '4', label: 'Food was Cold'},
    {id : '5', label: 'Restuarant Was not clean'},
    {id : '6', label: 'A/C\'s are nor working properly'},
    {id : '7', label: 'Food feels old'},
    {id : '8', label: 'Others'}
]

export const data = [
    {
        id: new Date().getTime(),
        date: new Date().toLocaleString(),
        feedbackType: 'Employee Behavior',
        category: 'Waiter Was Rude',
        description: 'Hello'
    },

    {
        id: new Date().getTime(),
        date: new Date().toLocaleString(),
        feedbackType: 'Employee Behavior',
        category: 'Waiter Was Rude',
        description: 'Hello'
    }
]
