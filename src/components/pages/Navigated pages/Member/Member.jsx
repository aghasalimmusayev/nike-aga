import React from 'react'
import MemberHeader from './MemberHeader'
import MemberBenefit from './MemberBenefit'
import MembersGet from './MembersGet'
import MemberConnect from './MemberConnect'
import '../navigatedPage.css'

function Member() {

    return (
        <div>
            <MemberHeader />
            <MemberBenefit />
            <MembersGet />
            <MemberConnect />
        </div>
    )
}

export default Member
