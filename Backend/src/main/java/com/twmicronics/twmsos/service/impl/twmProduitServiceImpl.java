package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmProduitDao;
import com.twmicronics.twmsos.dao.ItwmTypeProduitDao;
import com.twmicronics.twmsos.entities.twmProduit;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmProduitService;
import java.util.Optional;
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
public class twmProduitServiceImpl implements ItwmProduitService {
    
    @Autowired
    private ItwmProduitDao produitDao;
    
    @Autowired
    private ItwmTypeProduitDao typeDao;
    
    @Override
    public twmProduit createOne(twmProduit produit) throws DataAccessException {
        return produitDao.save(produit);
    }

    @Override
    public twmProduit findOne(Long id) throws DataAccessException {
        Optional<twmProduit> pd = produitDao.findById(id);
        twmProduit produit = pd.isPresent() ? pd.get() : null;
        return produit;
    }

    @Override
    public void deleteOne(Long id) throws DataAccessException {
        twmProduit pd = produitDao.getOne(id);
        if (pd != null) {
            produitDao.delete(pd);
        } else {
            throw new WebApplicationException("Produit innexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmProduit updateOne(twmProduit produit) throws DataAccessException {
        return produitDao.save(produit);
    }
    
    @Override
    public Page<twmProduit> findAll(int from, int to) throws DataAccessException {
        return produitDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "id")));
    }

    @Override
    public Page<twmProduit> findAllAsc(int from, int to) throws DataAccessException {
        return produitDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "nomProd")));
    }
    
    @Override
    public Page<twmProduit> findAllDesc(int from, int to) throws DataAccessException {
        return produitDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "nomProd")));
    }
    
    @Override
    public Page<twmProduit> findAllPrixUnitAsc(int from, int to) throws DataAccessException {
        return produitDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "prixUnit")));
    }
    
    @Override
    public Page<twmProduit> findAllPrixUnitDesc(int from, int to) throws DataAccessException {
        return produitDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "prixUnit")));
    }

    @Override
    public Page<twmProduit> findAllByNomProd(String nomProd, int from, int to) throws DataAccessException {
        return produitDao.findByNomProdIgnoreCaseLike(nomProd, PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "prixUnit")));
    }

    @Override
    public Page<twmProduit> findAllByType(int type, int from, int to) throws DataAccessException {
        return produitDao.findByType(typeDao.getOne(type), PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "nomProd")));
    }

    @Override
    public Page<twmProduit> findAllByPrixUnit(Double prixUnit, int from, int to) throws DataAccessException {
        return produitDao.findByPrixUnit(prixUnit, PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "nomProd")));
    }

    @Override
    public Page<twmProduit> findAllByState(int state, int from, int to) throws DataAccessException {
        return produitDao.findByState(state, PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "nomProd")));
    }
}
