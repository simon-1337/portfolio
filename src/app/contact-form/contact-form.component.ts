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

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    this.sendingEmail = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch('https://simon-besenbaeck.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    this.sendingEmail = false;
    //Text anzeigen Nachricht gesendet (evtl mit Variable nicht sicher)

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }


 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.slideInNormal();
    this.slideInLowOpacity();

  }

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

