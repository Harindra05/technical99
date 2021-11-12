import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeModel } from '@ngstack/code-editor';
declare var $:any;
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {

    constructor(private fb: FormBuilder, private toastr:ToastrService) { }
    theme = 'vs';
    isActive=true;
    questionCount :Array<any>=[
      {value:1 , color:"blue"},
      {value:2 , color:"blue"},
      {value:3 , color:"red"},
      {value:4 , color:"red"},
      {value:5 , color:null},
      {value:6 , color:null},
      {value:7 , color:null},
      {value:8 , color:null},
      {value:9 , color:null},
      {value:10 , color:null},
      {value:11 , color:null},
      {value:12 , color:null},
      {value:13 , color:null},
      {value:14 , color:null},
      {value:15 , color:null},
      {value:16 , color:"blue"},
      {value:17 , color:"red"},
      {value:18 , color:"red"},
      {value:19 , color:"blue"},
      {value:20 , color:"blue"},
      {value:21 , color:"blue"},
      {value:22 , color:"blue"},
      {value:23 , color:"blue"},
      {value:24 , color:"blue"},
    ]
    public form: FormGroup;
    model: CodeModel = {
      language: 'java',
      uri: 'java',
      dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor'],
      value: `public class ReverseNumberExample1   
        {  
          public static void main(String[] args)   
        {  
          int number = 987654, reverse = 0;  
          while(number != 0)   
        {  
          int remainder = number % 10;  
          reverse = reverse * 10 + remainder;
          number = number/10;  
        }  
          System.out.println("The reverse of the given number is: " + reverse);  
        }  
      }`
    };
    model1: CodeModel = {
      language: 'java',
      uri: 'main.java',
      value: `public class ReverseNumberExample1   
        {  
          public static void main(String[] args)   
        {  
          int number = 987654, reverse = 0;  
          while(number != 0)   
        {  
          int remainder = number % 10;  
          reverse = reverse * 10 + remainder;  
          number = number/10;  
        }  
          System.out.println("The reverse of the given number is: " + reverse);  
        }  
      }`
    };
    model2: CodeModel = {
      language: 'java',
      uri: 'main.json',
      value: `public class InsertAtStart {  
        //Represents the node of list.  
            public class Node{  
                int data;  
                Node next;  
                public Node(int data) {  
                    this.data = data;  
                }  
            }  
      
            //Declaring head and tail pointer as null.  
            public Node head = null;  
            public Node tail = null;  
      
            //This function will add the new node at the end of the list.  
            public void addAtStart(int data){  
                //Create new node  
                Node newNode = new Node(data);  
                //Checks if the list is empty.  
                if(head == null) {  
                     //If list is empty, both head and tail would point to new node.  
                    head = newNode;  
                    tail = newNode;  
                    newNode.next = head;  
                }  
                else {  
                    //Store data into temporary node  
                    Node temp = head;  
                    //New node will point to temp as next node  
                    newNode.next = temp;  
                    //New node will be the head node  
                    head = newNode;  
                    //Since, it is circular linked list tail will point to head.  
                    tail.next = head;  
                }  
            }  
      
            //Displays all the nodes in the list  
            public void display() {  
                Node current = head;  
                if(head == null) {  
                    System.out.println("List is empty");  
                }  
                else {  
                    System.out.println("Adding nodes to the start of the list: ");  
                     do{  
                        //Prints each node by incrementing pointer.  
                        System.out.print(" "+ current.data);  
                        current = current.next;  
                    }while(current != head);  
                    System.out.println();  
                }  
            }  
      
            public static void main(String[] args) {  
                InsertAtStart cl = new InsertAtStart();  
      
                //Adding 1 to the list  
                cl.addAtStart(1);  
                cl.display();  
                //Adding 2 to the list  
                cl.addAtStart(2);  
                cl.display();  
                //Adding 3 to the list  
                cl.addAtStart(3);  
                cl.display();  
                //Adding 4 to the list  
                cl.addAtStart(4);  
                cl.display();  
            }  
    } `
    };
    options = {
      contextmenu: false,
      minimap: {
        enabled: false
      }
    };
    ngOnInit(): void {
      $('.show-footer').click(function() {
        $('.other-technology').toggleClass('show-more');
    });
    this.form = this.fb.group({
      rating2: [5],
      ratings: [5, Validators.required],
    })
    this.startTimer();
    }
    onCodeChanged(value) {
      console.log('CODE', value);
    }
     bookmarkme() {
      alert("Press " + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ?  'Command/Cmd' : 'CTRL') + "+D to bookmark page.");
      return;
   };
  timer:any;
  date2 = new Date();
startTimer() {
  this.date2 = new Date(this.date2.getTime() + (3*60*60*1000)); 
  var x = setInterval(()=>
        {
           const date1 = new Date();
           const a = date1.getTime();
           const diff = ((this.date2.getTime() - a));  
           var distance = diff;
           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
           var hours = Math.floor((distance % (1000 * 60 * 60 * 48)) / (1000 * 60 * 60));
           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
          //  console.log(days,hours,minutes,seconds);   
           if(hours <1){
            this.timer =  minutes + ":" +" "+ seconds + ": " + " "+"left";
           }else if(hours >=1 && hours <=4 && !days){
            this.timer = '0'+ hours + ":" + " "+ minutes + ":" +" "+ seconds 
           }else if(hours >4 && hours <48 && days<2){
            this.timer =  hours + "h" + " "+"left";
           }else{
            this.timer = days+ " "+ "days"+ " "+"left";
           }
           if (distance < 0) {
           clearInterval(x);
              this.timer = "EXPIRED";
            }
            // console.log(this.timer);
            
         }, 1000);  

  }

  }
  
