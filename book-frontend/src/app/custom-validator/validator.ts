import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function titleValidator(): ValidatorFn {
    return((control: AbstractControl): {[key: string]: any} |null =>{
        const value = control.value

        console.log("Control: ", value)

        const regEx = /[@!#$%^&*()]/

        if(regEx.test(value)){
            console.log("Custom Validator")
            return {'specialChar': true}
        }
        return null
    })

}

// Custom validator function for validating author
export function authorValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    
    // Add your validation logic for author here
    // For example, check if the author's name meets specific criteria

    // If validation fails, return a validation error object
    // Otherwise, return null if validation passes
    return null; // Placeholder, replace with your validation logic
  };
}

// Custom validator function for validating genre
export function genreValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    
    // Add your validation logic for genre here
    // For example, check if the genre is from a predefined list of genres

    // If validation fails, return a validation error object
    // Otherwise, return null if validation passes
    return null; // Placeholder, replace with your validation logic
  };
}

// Custom validator function for validating description
export function descriptionValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    
    // Add your validation logic for description here
    // For example, check if the description meets specific length requirements

    // If validation fails, return a validation error object
    // Otherwise, return null if validation passes
    return null; // Placeholder, replace with your validation logic
  };
}
