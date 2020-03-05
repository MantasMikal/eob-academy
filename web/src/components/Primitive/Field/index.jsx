import FieldAnswer from './component/FieldAnswer'
import FieldAssistance from './component/FieldAssistance'
import FieldFeedback from './component/FieldFeedback'
import FieldQuestion from './component/FieldQuestion'
import FieldRequired from './component/FieldRequired'
import FieldWrapper from './component/FieldWrapper'

const Field = FieldWrapper
Field.displayName = 'Field'

Field.Answer = FieldAnswer
Field.Answer.displayName = 'Field.Answer'

Field.Assistance = FieldAssistance
Field.Assistance.displayName = 'Field.Assistance'

Field.Feedback = FieldFeedback
Field.Feedback.displayName = 'Field.Feedback'

Field.Question = FieldQuestion
Field.Question.displayName = 'Field.Question'

Field.Required = FieldRequired
Field.Required.displayName = 'Field.Required'

export default Field
