import * as student from '../app/student/interface/studentstate'
import * as tutor from '../app/tutor/interface/tutorstate'
import * as admin from '../app/admin/interface/adminState'

export interface appstateinterface{
    studentState : student.studentState
    tutorState : tutor.tutorState
    adminState : admin.adminState
}