import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeModel } from '@ngstack/code-editor';
import { ChartComponent } from 'ng-apexcharts';
declare var $:any;
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ToastrService } from 'ngx-toastr';
import { ChartOptions, ChartOptions1 } from 'src/app/app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  theme = 'vs';
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;
  isActive=true;
  public form: FormGroup;
    constructor(private fb: FormBuilder, private toastr:ToastrService) {
      this.chartOptions = {
        series: [{
          name: 'Desktops',
          data: [10, 41, 35]
        }],
        chart: {
          width: 300,
          type: "pie"
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
      this.chartOptions1 = {
        series: [
          {
            name: "Inflation",
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
          }
        ],
        chart: {
          height: 350,
          width:500,
          type: "bar"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
  
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          position: "top",
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        title: {
          text: "Monthly Inflation in Argentina, 2002",
          offsetY: 320,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
     }

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
    }
    ngOnInit(): void {
      $('.show-footer').click(function() {
        $('.other-technology').toggleClass('show-more');
    });
    this.form = this.fb.group({
      rating2: [5],
      ratings: [5, Validators.required],
    })
    }
    onCodeChanged(value) {
      console.log('CODE', value);
    }
    async shareWhatsApp(i){
      if(i==1){
        window.open("https://web.whatsapp.com/send?text=" + this.model1.value)
      }
      if(i==2){
        window.location.assign("https://twitter.com/intent/tweet?text=" + this.model1.value)?? 
      }
      if(i==3){
        window.location.assign("https://instagram.com/accounts/login/?text=" + this.model1.value)?? ??
      }
      if (i == 4) {
         window.location.assign("https://facebook.com/sharer/sharer.php?u=" + this.model1.value)
        }
      else {
        // await this.copyInputMessage(a);
      }
    }
    async copyCode(a){
      // this.model1.value;
      console.log(a);
      var text = this.model2.value;
        navigator.clipboard.writeText(text).then(function() {
        }, function(err) {
        });
      this.toastr.success('Techical99', 'Text copied successfully');
    }
     bookmarkme() {
      alert("Press " + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ?  'Command/Cmd' : 'CTRL') + "+D to bookmark page.");
      return;
   };
  }
