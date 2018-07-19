package com.twmicronics.twmsos.dao;

import com.twmicronics.twmsos.entities.twmRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author paulinlenasaein
 */
@Repository
public interface ItwmRoleDao extends JpaRepository<twmRole, Object>{

    /**
     * retourne le nombre d'utilisateurs ayant un rôle donné
     *
     * @param roleName role de l'utilisateur
     * @return un objet twmRole
     */
    public twmRole findByRoleName(String roleName);
}
