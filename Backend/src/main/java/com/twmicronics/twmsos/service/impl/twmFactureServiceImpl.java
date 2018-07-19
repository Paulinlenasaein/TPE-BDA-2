package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmFactureDao;
import com.twmicronics.twmsos.dao.ItwmPanierDao;
import com.twmicronics.twmsos.dao.ItwmUserDao;
import com.twmicronics.twmsos.entities.twmFacture;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmFactureService;
import java.util.Date;
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
public class twmFactureServiceImpl implements ItwmFactureService {
    
    @Autowired
    private ItwmFactureDao factureDao;
    
    @Autowired
    private ItwmUserDao userDao;
    
    @Autowired
    private ItwmPanierDao panierDao;

    @Override
    public twmFacture createOne(twmFacture facture) throws DataAccessException {
        return factureDao.save(facture);
    }

    @Override
    public twmFacture findOne(String numFacture) throws DataAccessException {
       return factureDao.findByNumFacture(numFacture);
    }

    @Override
    public void deleteOne(String numFacture) throws DataAccessException {
        twmFacture fact = factureDao.findByNumFacture(numFacture);
        if (fact != null) {
            factureDao.delete(fact);
        } else {
            throw new WebApplicationException("Facture Inexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmFacture updateOne(twmFacture facture) throws DataAccessException {
        return factureDao.save(facture);
    }

    @Override
    public Page<twmFacture> findAll(int from, int to) throws DataAccessException {
        return factureDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "numFacture")));
    }

    @Override
    public Page<twmFacture> findAllByClient(String client, int from, int to) throws DataAccessException {
        return factureDao.findByClient(userDao.findByUsername(client), PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "numFacture")));
    }

    @Override
    public twmFacture findOneByPanier(String indexPan, int from, int to) throws DataAccessException {
        return factureDao.findByPanier(panierDao.findByIndexPan(indexPan));
    }

    @Override
    public Page<twmFacture> findAllByDateAchat(Date dateAchat, int from, int to) throws DataAccessException {
        return factureDao.findByDateAchat(dateAchat, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "numFacture")));
    }

    @Override
    public Page<twmFacture> findAllByDateFacturation(Date dateFacturation, int from, int to) throws DataAccessException {
        return factureDao.findByDateFacturation(dateFacturation, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "numFacture")));
    }
    
    
}
