

// classes 


    // Everything related to the quotation and calculations ia insurance
    class Insurance {
    
        constructor(make,year, level) {
            this.make = make;
            this.year = year;
            this.level = level; 
        }

    // Calculate the price for the current qoutation
    calculateQoutation = function(Insurance) {
            let price;
            const base = 2000;

            // get the make
            const make = insurance.make;

                /*
                    1 = American 15%
                    2 = Asian 05%
                    3 = European 35%
                */
            switch(make) {
                case '1':
                    price = base * 1.15;
                    break;
                case '2':
                    price = base * 1.05;
                    break;
                case '3':
                        price = base * 1.35;
                        break;

        }

            // get the year
            const year = Insurance.year;

            // get the year difference
            const difference = this.getYearDifference

            // Each year the cost of the Insurance is going 3% cheaper
            price = price - ((difference*3) * price) / 100;

            // check the level of protection
            const level = Insurance.level;
   
            price = this.calculateLevel(price, level);

             return price;
    }
    // Return the different between years 
    getYearDifference= function(year) {
        return new Date().getFullYear() - year; 
    }
    // adds the value based on the level of protection
    calculateLevel = function(year, level) {
        /*
                basic Insurance is going to increase the value by 30%
                complete Insurance is going to increase the vakue by 50%
            */
        if(level === 'basic') {
             price = price * 1.30;
        } else {
                    price = price * 1.50;
        }

        return price;
   }
}


// Everything related to the HTML
class HTMLUI {
    // Display the latest 20 years in the select
        displayYears = function() {
            // max & minimum years
            const max = new Date().getFullYear();
                min = max - 20;

            // Generate the list with the latest 20 year
            const selectYear = document.getElementById('year');

            // print the values
            for(let i = max; i > min; i-- ) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                selectYear.appendChild(option);
            }
        }
        // print the error

        displayError(message) {
            // create a div
            const div = document.createElement('div');
            div.classList = 'error';

            // insert the message
            div.innerHTML = `
            <p>$(message)</p>
            `;

            form.insertBefore(div, document.querySelector('.form-group'));

            //remove the error
            setTimeout(function() {
                document.querySelector('error').remove();
            }, 3000);
        }

        // prints the result into the HTML
        showResults(price, insurance) {
            // print the result
            const result = document.getElementById('result');

            // create a div with the result
            const dive = document.createElement('div');

            // get make from the the object an assign a readable name
            let make = insurance.make;

            switch(make) {
                case '1':
                    make = 'American';
                    break;
                case '2':
                    make = 'Asian';
                    break;
                case '3':
                    make = 'European';
                    break;

            }


            // insert the result
            div.innerHTML =  `
            <p class="header">summary</p>
            <p>Make: ${make}</p>
            <p>Year: ${insurance.year}</p>
            <p>Level: ${insurance.level}</p>
            <p class="total">Total: $ ${price}<p>
            `;
            
            const spinner = document.querySelector('#loading img');
            spinner.style.display = 'block';

            setTimeout(function() {
                spinner.style.display = 'none';
                // insert this into the HTML
                result.appendChild(div);
            }, 3000);


        }
}   
