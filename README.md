# Alzheimer’s Disease Detection : 
* Alzheimer's disease is a progressive and irreversible neurodegenerative disorder that causes memory loss, cognitive impairment, and a decline in various brain functions, leading to a loss of independence in daily life. It is estimated that the number of people affected by Alzheimer's disease will increase from 47 million to 152 million by 2050, resulting in significant economic, medical, and societal consequences. There is currently no cure or treatment available that can halt the disease progression, and its pathophysiology remains unknown. Patients with amnestic moderate cognitive impairment (MCI) are at a higher risk of developing Alzheimer's disease, emphasizing the importance of early detection through MCI screening to facilitate better care and the development of new treatments.

# Objective
* The main objective of this project is to detect Alzheimer's disease  early using a CNN network approach and Transfer Learning . The project aims to analyze brain MRI data and develop a CNN model that can differentiate between different cognitive states, including 'MildDemented', 'ModerateDemented', 'NonDemented', and 'VeryMildDemented'. By leveraging this CNN model, we aim to enhance early detection and contribute to improved diagnoses and interventions for individuals at risk of Alzheimer's disease.


<div style="display:flex; justify-content: space-between; align-items: flex-start;">
    <div style="flex-basis: 49%;">
        <h3>Project Architecture</h3>
        <img src="graphs/Project_arch.png" alt="Project Architecture">
    </div>
    <div style="flex-basis: 49%;">
        <h3>Deployment Architecture</h3>
        <img src="graphs/Deployment Architecture.png" alt="Deployment Architecture">
    </div>
</div>











## Tech Stack

- Python
- TensorFlow (Machine learning framework for building neural networks)
- NumPy (Numerical computing library)
- React (For frontend development)
- Matplotlib (Data visualization library)
- Flask (Python web framework for building web applications)
- Flask-Cors (Extension for handling Cross-Origin Resource Sharing in Flask)
- MLflow (Open-source platform for managing the machine learning lifecycle)


## How to Run?

Before running the project, please ensure that you have the following prerequisites:

1. **MongoDB**: Make sure you have MongoDB installed on your local system, along with MongoDB Compass for data storage. You can download MongoDB from the official website and follow the installation instructions.


Once you have the prerequisites set up, follow these steps to run the project:
## step 1: Clone repository
1. Clone the repository to your local machine 

```
## step 2: Create a enviroment
```bash	
conda create -n alzenv python=3.8 -y
conda activate alzenv
'''

## step 3: Install required dependencies

```bash	
pip install -r requirements.txt
```

## step 4: Set environment variables

```bash	

set MONGODB_URL="mongodb+srv://<username>:<password>@cluster0.ogtv1f4.mongodb.net/?retryWrites=true&w=majority"

```

## step 5: Run the application 

```bash	
python app.py
```
## step 6: to Train 

```bash		
http://localhost:8080/train

```







# Experiment Tracking with MLflow


### ML flow locally 
To run MLflow locally, open a new command prompt or terminal window and execute the following command:

```bash 
mlflow ui
```
This will start the MLflow server locally, and you can access the MLflow UI by visiting http://localhost:5000 in your web browser.


### ML flow remote(Dagshub)
To track experiments externally using Dagshub, set the following environment variables:

```bash 
set MLFLOW_TRACKING_URI=https://dagshub.com/username/Alzheimer-s-Disease-Detection.mlflow 
set MLFLOW_TRACKING_USERNAME= username 
set MLFLOW_TRACKING_PASSWORD= password 

```

Replace <username> and <password> with your Dagshub credentials. This will configure MLflow to use Dagshub as the external tracking server.

