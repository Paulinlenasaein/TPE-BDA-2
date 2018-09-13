package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmRoleDao;
import com.twmicronics.twmsos.dao.ItwmUserDao;
import com.twmicronics.twmsos.entities.twmUser;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmUserService;
import com.twmicronics.twmsos.service.SendEmailService;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.MessagingException;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author paulinlenasaein
 */
@Service
@Transactional
public class twmUserServiceImpl implements ItwmUserService {

    @Autowired
    private ItwmUserDao userDao;
    
    @Autowired
    private ItwmRoleDao roleDao;
    
    @Override
    public twmUser createOne(twmUser user) throws DataAccessException {
        return userDao.save(user);
    }

    @Override
    public twmUser findOne(String username) throws DataAccessException {
       return  userDao.findByUsername(username);
    }

    @Override
    public void deleteOne(String username) throws DataAccessException {
        twmUser user = userDao.findByUsername(username);
        if (user != null) {
            userDao.delete(user);
        } else {
            throw new WebApplicationException("Utilisateur Inexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmUser updateOne(twmUser user) throws DataAccessException {
        return userDao.save(user);
    }

    @Override
    public Page<twmUser> findAll(int from, int to) throws DataAccessException {
        return userDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "firstName")));
    }

    @Override
    public Page<twmUser> findAllByFirstName(String firstName, int from, int to) throws DataAccessException {
        return userDao.findByFirstNameIgnoreCase(firstName, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "firstName")));
    }

    @Override
    public Page<twmUser> findAllByFirstNameAndLastName(String firstName, String lastName, int from, int to) throws DataAccessException {
        return userDao.findByFirstNameAndLastNameIgnoreCase(firstName, lastName, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "username")));
    }

    @Override
    public twmUser findOneByEmail(String email) throws DataAccessException {
        return userDao.findByEmail(email);
    }

    @Override
    public twmUser findOneByTelephone(String telephone) throws DataAccessException {
        return userDao.findByTelephone(telephone);
    }

    @Override
    public Page<twmUser> findAllByState(int state, int from, int to) throws DataAccessException {
        return userDao.findByState(state, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "username")));
    }

    @Override
    public Page<twmUser> findAllByRole(String role, int from, int to) throws DataAccessException {
        return userDao.findByRoleIgnoreCase(roleDao.findByRoleName(role), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "username")));
    }  

    @Override
    public String sendEmail(String toEmail, String lastname) throws DataAccessException {
        try {
            return SendEmailService.generateAndSendEmail(toEmail, lastname);
        } catch (MessagingException ex) {
            Logger.getLogger(twmUserServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "Echec de l'énvoi de l'email, veuillez vérifier que votre adresse email est correcte ou que vous êtes bien connecté...";
    }

    @Override
    public String sendEmailTransaction(String toEmail, String firstName, String lastName, Double amount, String paymode) throws DataAccessException {
        try {
            return SendEmailService.SendEmailTransaction(toEmail, firstName, lastName, amount, paymode);
        } catch (MessagingException ex) {
            Logger.getLogger(twmUserServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "Echec de l'énvoi de l'email, veuillez vérifier que votre adresse email est correcte, que vous êtes bien connecté...";
    }

}
