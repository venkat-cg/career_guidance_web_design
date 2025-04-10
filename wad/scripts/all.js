// Get the list element to display colleges
let list = document.getElementById('list');

// List of colleges
const collegeList = [
    {
        id: 1,
        name: 'PVPSIT, Computer Science and Engineering',
        minRank: 1200,
        city: 'Vijayawada',
        class: 'B.Tech',
        description: 'PVPSIT offers a strong foundation in computer science with experienced faculty and modern labs.',
        image: 'imgs/pvpsit.jpeg',
        website: 'https://www.pvpsiddhartha.ac.in'
    },
    {
        id: 2,
        name: 'PVPSIT, Mechanical Engineering',
        minRank: 1100,
        city: 'Vijayawada',
        class: 'B.Tech',
        description: 'PVPSIT Mechanical Engineering focuses on practical skills with industry connections.',
        image: 'imgs/pvpsit.jpeg',
        website: 'https://www.pvpsiddhartha.ac.in'
    },
    {
        id: 3,
        name: 'Andhra University, Electronics and Communication Engineering',
        minRank: 900,
        city: 'Visakhapatnam',
        class: 'B.Tech',
        description: 'A prestigious program offering deep insights into electronics with a focus on innovation.',
        image: 'imgs/apuniversity.jpeg',
        website: 'https://www.andhrauniversity.edu.in'
    },
    {
        id: 4,
        name: 'Andhra University, Civil Engineering',
        minRank: 950,
        city: 'Visakhapatnam',
        class: 'B.Tech',
        description: 'Known for its robust civil engineering department with excellent placement records.',
        image: 'imgs/apuniversity.jpeg',
        website: 'https://www.andhrauniversity.edu.in'
    },
    {
        id: 5,
        name: 'JNTU Kakinada, Electrical Engineering',
        minRank: 1050,
        city: 'Kakinada',
        class: 'B.Tech',
        description: 'Specializes in practical electrical engineering skills with modern labs and facilities.',
        image: 'imgs/jntuk.jpeg',
        website: 'https://www.jntuk.edu.in'
    },
    {
        id: 6,
        name: 'JNTU Kakinada, Mechanical Engineering',
        minRank: 1000,
        city: 'Kakinada',
        class: 'B.Tech',
        description: 'Offers a dynamic curriculum with an emphasis on practical application.',
        image: 'imgs/jntuk.jpeg',
        website: 'https://www.jntuk.edu.in'
    },
    {
        id: 7,
        name: 'SV University, Information Technology',
        minRank: 1100,
        city: 'Tirupati',
        class: 'B.Tech',
        description: 'Focused on industry-aligned IT courses and hands-on project experience.',
        image: 'imgs/svuni.jpeg',
        website: 'https://svuniversity.edu.in'
    },
    {
        id: 8,
        name: 'SV University, Chemical Engineering',
        minRank: 1150,
        city: 'Tirupati',
        class: 'B.Tech',
        description: 'Known for its research-oriented chemical engineering department.',
        image: 'imgs/svuni.jpeg',
        website: 'https://svuniversity.edu.in'
    },
    {
        id: 9,
        name: 'KLU, Artificial Intelligence and Machine Learning',
        minRank: 950,
        city: 'Vijayawada',
        class: 'B.Tech',
        description: 'Offers a modern AI and ML program with strong industry collaborations.',
        image: 'imgs/klu.jpeg',
        website: 'https://www.kluniversity.in'
    },
    {
        id: 10,
        name: 'KLU, Civil Engineering',
        minRank: 1050,
        city: 'Vijayawada',
        class: 'B.Tech',
        description: 'A comprehensive civil engineering program with advanced lab facilities.',
        image: 'imgs/klu.jpeg',
        website: 'https://www.kluniversity.in'
    },
    {
        id: 11,
        name: 'SRKR Engineering College, Computer Science',
        minRank: 1150,
        city: 'Bhimavaram',
        class: 'B.Tech',
        description: 'Known for its excellent CSE faculty and strong placement history.',
        image: 'imgs/srkr.jpeg',
        website: 'https://www.srkrec.edu.in'
    },
    {
        id: 12,
        name: 'SRKR Engineering College, Electronics Engineering',
        minRank: 1200,
        city: 'Bhimavaram',
        class: 'B.Tech',
        description: 'Focuses on practical and innovative approaches to electronics engineering.',
        image: 'imgs/srkr.jpeg',
        website: 'https://www.srkrec.edu.in'
    },
    {
        id: 13,
        name: 'GITAM University, Biotechnology',
        minRank: 1300,
        city: 'Visakhapatnam',
        class: 'B.Tech',
        description: 'GITAM offers a top-notch biotech program with industry partnerships.',
        image: 'imgs/gitam.jpeg',
        website: 'https://www.gitam.edu'
    },
    {
        id: 14,
        name: 'GITAM University, Civil Engineering',
        minRank: 1200,
        city: 'Visakhapatnam',
        class: 'B.Tech',
        description: 'Strong civil engineering curriculum with an emphasis on real-world applications.',
        image: 'imgs/gitam.jpeg',
        website: 'https://www.gitam.edu'
    },
    {
        id: 15,
        name: 'VIT-AP University, Computer Science and Engineering',
        minRank: 950,
        city: 'Amaravati',
        class: 'B.Tech',
        description: 'A modern CSE program with access to advanced technology and research.',
        image: 'imgs/vit.jpeg',
        website: 'https://vitap.ac.in'
    }
];


// Function to display all colleges
function showColleges(colleges) {
    list.innerHTML = ''; // Clear previous results

    colleges.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // College Title
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        // College Image
        let newImage = new Image();
        newImage.src = item.image;
        newImage.alt = item.name;
        newItem.appendChild(newImage);

        // College Description
        let newDescription = document.createElement('div');
        newDescription.classList.add('description');
        newDescription.innerText = item.description;
        newItem.appendChild(newDescription);

        // View Details Button (links to college.html?id=...)
        let newLink = document.createElement('a');
        newLink.href = `college.html?id=${item.id}`;
        newLink.innerText = 'View Details';
        newLink.target = '_blank';
        newItem.appendChild(newLink);

        list.appendChild(newItem);
    });
}

// Show all colleges on page load
showColleges(collegeList);
