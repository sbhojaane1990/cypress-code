///<reference types = "Cypress"/>

describe('FileUploading ',()=>{
    it('TC_ 01 fileuploading verification',()=>{
        cy.visit('https://automationexercise.com/contact_us')
        let youpath='my.txt';
        cy.get('[name="upload_file"]').attachFile(youpath)
        cy.get('[name="upload_file"]').should('contain',youpath)
      
    })
    it.only('Drag and drop methode verify',()=>{
        
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let y='my.txt';
        cy.get('#file').attachFile(y)
        cy.get('div.box__success').should('contain.text','Done')
    })
 })

// describe('Tutorialspoint Test', function () {

//     // test case
//     it('Test Case6', function (){
 
//        //file to be uploaded path in project folder
//        const p = 'Picture.jpeg'
 
//        // launch URL
//        cy.visit("https://the-internet.herokuapp.com/upload")
 
//        //upload file with attachFile
//        cy.get('#file-upload').attachFile(p)
 
//        //click on upload
//        cy.get('#file-submit').click()
 
//        //verify uploaded file
//        cy.get('#uploaded-files').contains('Picture')
//     });
//  });