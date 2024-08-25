pragma solidity ^0.8.0;

contract Healthcare {

    struct Medicine {
        uint id;
        string IPFS_URL;
        uint price;
        uint quantity;
        uint discount;
        string currentLocation;
        bool active;
    }
    
    struct Doctor {
        uint id;
        string IPFS_URL;  
        address accountAddress;
        uint appointmentCount;
        uint successfulTreatmentCount;
        bool isApproved;
    }

    struct Patient {
        uint id;
        string IPFS_URL; 
        string[] medicalHistory; 
        address accountAddress;
        uint[] boughtMedicines;
    }

    struct Prescription {
        uint id;
        uint medicineId;
        uint patientId;
        uint doctorId;
        uint date;
    }
    

    struct Appointment {
        uint id;
        uint patientId;
        uint doctorId;
        uint date;
        string from;
        string to;
        string appointmentDate;
        string condition;
        string message;
        bool isOpen;
    }

    struct User {
        string name;
        string userType;
        friend[] friendList;
    }

    struct friend{
        address pubkey;
        string name;
    }

    struct message{
        address sender;
        uint256 timestamp;
        string msg;
    }

    struct AllUserStruck{
        string name;
        address accountAddress;
    }

    struct Order {
        uint medicineId;
        uint price;
        uint payAmount;
        uint quantity;
        uint patientId;
        uint date;
    }

    struct Notification {
        uint id;
        address userAddress;
        string message;
        uint timestamp;
        string categoryType;
    }

    AllUserStruck[] getAllUsers;

    mapping(address => User) userList;
    mapping(bytes32 => message[]) allMessages;
    
    mapping(address => Notification[]) private notifications;
    mapping(uint => Order[]) public patientOrders;
    mapping(uint => Medicine) public medicines;
    mapping(uint => Doctor) public doctors;
    mapping(uint => Patient) public patients;
    mapping(uint => Prescription) public prescriptions;
    mapping(uint => Appointment) public appointments;
    mapping(address => bool) public registeredDoctors;
    mapping(address => bool) public registeredPatients;

    uint public medicineCount;
    uint public doctorCount;
    uint public patientCount;
    uint public prescriptionCount;
    uint public appointmentCount;

    address payable public admin;
    uint public registrationDoctorFee = 0.0025 ether;
    uint public registrationPatientFee = 0.00025 ether;
    uint public appointmentFee = 0.0025 ether;
    }