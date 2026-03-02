        // Get references to the DOM elements
        const numberInput = document.getElementById('numberInput');
        const rangeInput = document.getElementById('rangeInput');
        const generateBtn = document.getElementById('generateBtn');
        const tableContainer = document.getElementById('table-container');
        const errorMessage = document.getElementById('error-message');

        // Function to generate and display the multiplication table
        function generateTable() {
            // Clear previous content and error messages
            tableContainer.innerHTML = '';
            errorMessage.textContent = '';

            // Get and validate the user inputs
            const number = parseFloat(numberInput.value);
            const range = parseInt(rangeInput.value, 10);

            // Check if inputs are valid numbers
            if (isNaN(number) || isNaN(range)) {
                errorMessage.textContent = 'Please enter valid numbers for both fields.';
                return;
            }
            
            // Check if range is positive
            if (range <= 0) {
                errorMessage.textContent = 'Range must be a positive number.';
                return;
            }

            // Create the table structure
            const table = document.createElement('table');
            table.className = 'w-full text-center rounded-lg fade-in';
            
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr class="bg-gray-900 text-gray-200">
                    <th class="p-3 font-semibold rounded-tl-lg">Expression</th>
                    <th class="p-3 font-semibold rounded-tr-lg">Result</th>
                </tr>
            `;
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            
            // Loop to create table rows
            for (let i = 1; i <= range; i++) {
                const result = number * i;
                const row = document.createElement('tr');
                
                // Add alternating background colors for readability
                row.className = i % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600';

                // Format the numbers for better readability if they are large
                const formattedNumber = number.toLocaleString();
                const formattedIterator = i.toLocaleString();
                const formattedResult = result.toLocaleString();

                row.innerHTML = `
                    <td class="p-3 text-gray-200">${formattedNumber} &times; ${formattedIterator}</td>
                    <td class="p-3 text-gray-200 font-medium">${formattedResult}</td>
                `;
                tbody.appendChild(row);
            }

            table.appendChild(tbody);
            tableContainer.appendChild(table);
        }

        // Add event listener to the button
        generateBtn.addEventListener('click', generateTable);
        
        // Optional: Allow pressing Enter in input fields to generate the table
        numberInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                generateTable();
            }
        });

        rangeInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                generateTable();
            }
        });