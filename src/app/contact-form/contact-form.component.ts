import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  sendingEmail: Boolean = false;
  emailSent: Boolean = false;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}


  /**
   * This function is used to call all necessary functions for the process of sending an email
   */
  async sendMail() {
    this.disableInputFields();
    this.enableSendingAnimation();
    await this.createEmail();
    this.disableSendingAnimation();
    this.clearInputFields();
    this.enableInputFields();
  }


  /**
   * This function is used to add the email content and send the email itself
   */
  async createEmail() {
    let fd = new FormData();
    fd.append('name',this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);

    await fetch('https://simon-besenbaeck.com/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
  }


  /**
   * This function is used to disable the input fields while the sending process
   */
  disableInputFields() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
  }


  /**
   * This function is used to set the variables so that the sending animation is played
   */
  enableSendingAnimation() {
    this.sendingEmail = true;
    this.emailSent = false;
  }


  /**
   * This function is used to set the variables so that the sending animation is stopped and sent successfull is displayed
   */
  disableSendingAnimation() {
    this.sendingEmail = false;
    this.emailSent = true;
  }
 

  /**
   * This function is used to clear the input fields after the email has been sent
   */
  clearInputFields() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }


  /**
   * This function is used to reenable the input fields after the email has been sent
   */
  enableInputFields() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
  }



  @HostListener('window:scroll', [])


  /**
   * This fuction checks if the user scrolls and if so calls the two functions to slide in elements
   */
  onWindowScroll() {
    this.slideInNormal();
    this.slideInLowOpacity();

  }


  /**
   * This function is used to check if an element is in the Screen and adds the slide in class to this element
   */
  slideInNormal() {
    const elements = document.querySelectorAll('.slide-in-element');
    const screenHeight = window.innerHeight;

    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;

      // Check if the top of the element is visible in the viewport
      if (position - screenHeight <= 0) {
        // Add the slide-in class to trigger the animation
        this.renderer.addClass(element, 'slide-in');
      }
    });
  }
  

  /**
   * This function is used to check if an element is in the Screen and adds the slide in class to this element (in this case with a lower opacity)
   */
  slideInLowOpacity() {
    const elements = document.querySelectorAll('.slide-in-element-low-op');
    const screenHeight = window.innerHeight;

    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;

      // Check if the top of the element is visible in the viewport
      if (position - screenHeight <= 0) {
        // Add the slide-in class to trigger the animation
        this.renderer.addClass(element, 'slide-in-low-op');
      }
    });
  }
}

