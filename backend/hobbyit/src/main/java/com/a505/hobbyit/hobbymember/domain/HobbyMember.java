package com.a505.hobbyit.hobbymember.domain;

import com.a505.hobbyit.hobby.domain.Hobby;
import com.a505.hobbyit.hobbymember.enums.HobbyMemberPrivilege;
import com.a505.hobbyit.hobbymember.enums.HobbyMemberState;
import com.a505.hobbyit.hobbymember.exception.UnAuthorizedHobbyException;

import com.a505.hobbyit.member.domain.Member;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name="hobby_member")
public class HobbyMember {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(nullable = false, name = "mem_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false, name = "hobby_id")
    private Hobby hobby;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private HobbyMemberState state = HobbyMemberState.ACTIVE;

    @Column(nullable = false, name = "reg_dt")
    private LocalDateTime enrollDate;

    @Column(name = "resd_dt")
    private LocalDateTime resignedDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "privilege", nullable = false)
    private HobbyMemberPrivilege privilege = HobbyMemberPrivilege.GENERAL;

    @Builder
    public HobbyMember(Member member, Hobby hobby, HobbyMemberState state, LocalDateTime enrollDate, LocalDateTime resignedDate, HobbyMemberPrivilege privilege) {
        this.member = member;
        this.hobby = hobby;
        this.state = state;
        this.enrollDate = enrollDate;
        this.resignedDate = resignedDate;
        this.privilege = privilege;
    }

    public void updatePrivilege(HobbyMemberPrivilege hobbyMemberPrivilege){
        this.privilege = hobbyMemberPrivilege;
    }

    public void updateState(HobbyMemberState state){
        this.state = state;
    }

    public void checkPrivilege(){
        if(this.privilege != HobbyMemberPrivilege.OWNER) throw new UnAuthorizedHobbyException();
    }
}
