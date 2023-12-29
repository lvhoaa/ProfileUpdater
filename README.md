# ProfileUpdater -- Update Github profile via API + Cloud 


![image](https://github.com/lvhoaa/ProfileUpdater/assets/87745938/f89245a8-324f-4896-a9c8-fff21a2b7ec8)

## Project Overview 
Profile Updater is a cool project where I try to update the time on my Github profile every minute using API and cloud. 
Key features:
- Update profile by committing to my profile [README.md](https://github.com/lvhoaa/lvhoaa) file using Github Octokit API
- Automate this task by hosting an instance/computer in the cloud (AWS)

## Usage 

To run the ProfileUpdater locally, follow these steps:

1. Clone the repository or download the source code.
   ```bash
   git clone https://github.com/lvhoaa/ProfileUpdater.git

2. Navigate to the project directory in your terminal.

3. Install the dependencies by running the following command:
   ```bash
   npm install
4. Set up the environment variables. Create a .env file in the root directory and add the necessary configuration variables such as Github personal access Token, Github username, and repository. 

5. Run the script using the following command:
   ```bash
   node running.js

6. Now the script should be able to make changes to your profile README.md file every minute

7. Host it in the cloud: Launch AWS EC2 Instance and push the script! Use this [guide](https://medium.com/@andras1000_18467/how-to-run-a-python-script-in-the-cloud-e486eef96ac3) for help.


## Contributing
Contributions to this project are welcome! If you have any suggestions, bug fixes, or new features to propose, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. You can find the full license text in the LICENSE file.
