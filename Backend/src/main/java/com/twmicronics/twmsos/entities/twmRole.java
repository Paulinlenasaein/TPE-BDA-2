package com.twmicronics.twmsos.entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

/**
 *
 * @author paulinlenasaein
 */
@Entity
@Data
public class twmRole implements Serializable {
    
    
    @Id
    @Length(min = 5, max = 10)
    private String roleName;
    
    @Column(columnDefinition = "bigint unsigned not null default 0")
    private Long nbre_user;
}
