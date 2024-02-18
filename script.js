
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s ease;
        }

        header {
            background-color: #333;
            color: #fdf908;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s ease;
        }
        header h1 {
            margin: 0;
            display: flex;
            align-items: center;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        nav ul li {
            margin-right: 20px;
        }
        nav ul li a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }

        /* Media queries for responsiveness */
        @media screen and (max-width: 768px) {
            header {
                padding: 10px; /* Reduced padding for smaller screens */
            }

            nav ul li {
                margin-right: 10px; /* Reduced margin for navigation list items */
            }

            .toggle {
                right: 10px; /* Adjusted right position for toggle button */
                top: 10px; /* Adjusted top position for toggle button */
            }

            .slideshow-container {
                max-width: 100%; /* Ensuring slideshow container fits the full width */
            }
        }

        * {box-sizing: border-box;}
            body {font-family: Verdana, sans-serif;}
            .mySlides {display: none;}
                img {vertical-align: middle;}

        /* Slideshow container */
        .slideshow-container {
            max-width: 1000px;
            position: relative;
            margin: auto;
        }

        /* Number text (1/3 etc) */
        .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
        }

        /* The dots/bullets/indicators */
        .dot {
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }

        .active {
            background-color: #717171;
        }
        /* Fading animation */
        .fade {
            animation-name: fade;
            animation-duration: 1.5s;
        }

        @keyframes fade {
            from {opacity: .4} 
            to {opacity: 1}
        }

        /* On smaller screens, decrease text size */
            @media only screen and (max-width: 300px) {
        .text {font-size: 11px}
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px 0;
            transition: background-color 0.3s ease;
        }

        /* Styling for sections */
        section {
            margin-bottom: 50px;
        }

        .container {
        text-align: center;
        }

        #services {
        margin-top: 50px;
        }

        .services {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        }

        .service {
        width: 350px;
        margin: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        }

        .service:hover {
        transform: translateY(-5px);
        }

        /* Contact Us section */
        #contact {
            padding: 50px;
        }

        #contact h2 {

            font-size: 28px;
            margin-bottom: 20px;
        }

        #contact p {
        
            font-size: 16px;
            margin-bottom: 10px;
        }

        #contact p:last-child {
            margin-bottom: 0;
        }

        /* About Us section */
        #about {
        
            padding: 50px;
        }

        #about h2 {
            
            font-size: 28px;
            margin-bottom: 20px;
        }

        #about p {
        
            font-size: 16px;
            margin-bottom: 10px;
        }

        #about p:last-child {
            margin-bottom: 0;
        }

        .click-to-call {
            position: absolute;
            top: 20px; /* Adjust as needed */
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
        
          }
          
          .button {
            display: inline-block;
            padding: 3px 5px;
            background-color: #d3d018;
            color: white;
            font-size: 15px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s, transform 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .button:hover {
            background-color: #45a049;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
          }
          
          .icon {
            margin-right: 10px;
            vertical-align: middle;
          }
        
      
