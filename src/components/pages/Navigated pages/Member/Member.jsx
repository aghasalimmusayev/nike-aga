import React from 'react'
import MemberHeader from './MemberHeader'
import MemberBenefit from './MemberBenefit'
import MembersGet from './MembersGet'
import MemberConnect from './MemberConnect'
import MemberFag from './MemberFag'
import '../navigatedPage.css'

function Member() {

    return (
        <div>
            <MemberHeader />
            <MemberBenefit />
            <MembersGet />
            <MemberConnect />
            <MemberFag />
        </div>
    )
}

export default Member
