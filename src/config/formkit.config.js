import { generateClasses } from '@formkit/themes'
import { pt } from '@formkit/i18n'

export default {
  locales: { pt },
  locale: 'pt',
  config: {
    classes: generateClasses({
      global: { // applies to all input types
        wrapper: '$reset',
        outer: '$reset',
        input: '$reset form-control py-2 lh-lg',
        label: '$reset form-label fw-semibold fs-small',
        help: '$reset form-text',
        message: '$reset invalid-feedback'
        
      },
      submit: {
        input : '$reset btn btn-secondary text-light rounded-2 w-100 py-2 lh-lg fw-semibold'
      },
      button: {
        input: '$reset btn btn-outline-secondary rounded-2 w-100 py-2 lh-lg fw-semibold'
      }
  /*     text: { // only applies to text input type
        outer: 'bizz',
        input: '$reset fizz'
      },
      email: { // only applies to email input type
        outer: 'bap',
        input: '$reset bop'
      } */
    })
  }
}